import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
    const [data, setData] = useState([]);

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

    const userList = data.map( ( user ) => {
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

    return (
        <main>
            <h3 id="subjectText">User List</h3>
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
        </main>
    );
};

export default UserList;