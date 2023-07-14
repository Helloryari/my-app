import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import Sidebar from "../components/Sidebar";

const ProductList = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://dev.jinyuone.com/api/getProductList.php');
            setData( response.data );
        } catch( error ) {
            console.log( error );
        }
    };

    const productList = data.map( ( product ) => {
        let uri = `/product/${product.idx}`;
        return (
            <div className="row" key={product.idx}>
                <span className="cell col1_7">{product.number}</span>
                <span className="cell col2_7"><Link to={uri}>{product.prod_name}</Link></span>
                <span className="cell col3_7">{product.scale}</span>
                <span className="cell col4_7">{product.co_partner}</span>
                <span className="cell col5_7">{product.pd_type}</span>
                <span className="cell col6_7">{product.gyejung}</span>
                <span className="cell col7_7">{product.jodal}</span>
            </div>
        );
    });

    return (
        <div className="main">
            <div className="content">
                <h3 id="subjectText">Product</h3>
                <div id="table">
                    <div className="row title">
                        <span className="cell col1_7">번호</span>
                        <span className="cell col2_7">품목명</span>
                        <span className="cell col3_7">규격</span>
                        <span className="cell col4_7">거래처</span>
                        <span className="cell col5_7">품목군</span>
                        <span className="cell col6_7">계정</span>
                        <span className="cell col7_7">조달</span>
                    </div>
                    { productList }
                </div>
                <Sidebar />
            </div>
        </div>
    );
};

export default ProductList;