import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Pagination from "../components/Pagination";

const UserList = () => {
    const [data, setData] = useState([]);
    const [limit, setLimit] = useState(40);
    const [currentPage, setCurrentPage] = useState(1);
    const offset = (currentPage-1) * limit;
    const maxVisiblePages = 5;

    useEffect( () => {
        fetchData();
    },[]);

    const fetchData = async () => {
        try {
            const sabun = sessionStorage.getItem("sabun");
            const url = "http://dev.jinyuone.com/api/getUserList.php";
            const response = await axios.get(url, { params: {sabun: sabun} });
            setData( response.data );
        } catch ( error ) {
            console.log( error );
        }
    };

    let uri = "";

    const userList = data.slice( offset, offset+limit ).map( ( user ) => {
        uri = `/user/${user.sabun}`;
        return(
            <div className="row" key={user.sabun}>
                <span className="cell col1_6">{user.number}</span>
                <span className="cell col2_6">{user.part}</span>
                <span className="cell col3_6"><Link to={uri}>{user.name}</Link></span>
                <span className="cell col4_6">{user.grade}</span>
                <span className="cell col5_6">{user.cellphone}</span>
                <span className="cell col6_6">{user.interphone}</span>
            </div>
        );
    });

    const totalPages = Math.ceil( data.length/limit );

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    }

    return (
        <div className="main">
            <div className="content">
                <h3 id="subjectText">User List</h3>
                <label>
                    페이지당 표시할 게시물 수 : &nbsp;
                    <select
                        type="number"
                        value={limit}
                        onChange={({ target: { value }}) => setLimit(Number(value))}
                    >
                        <option value="20">20</option>
                        <option value="40">40</option>
                        <option value="100">100</option>
                    </select>
                </label>
            
                <div id="table">
                    <div className="row title">
                        <span className="cell col1_6">번호</span>
                        <span className="cell col2_6">부서</span>
                        <span className="cell col3_6">이름</span>
                        <span className="cell col4_6">직급</span>
                        <span className="cell col5_6">휴대전화</span>
                        <span className="cell col6_6">내선</span>
                    </div>
                    {userList}
                </div>
                <Pagination
                    currentPage={currentPage}
                    maxVisiblePages={maxVisiblePages} 
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
                <div>
            </div>
            </div>
        </div>
    );
};

export default UserList;