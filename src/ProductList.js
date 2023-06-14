import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

// 나중에 axios 통신을 통해 서버로 부터 받아오는 값
const data = [
    {
        idx: 7,
        prodname: "7번제품",
        register: "김진태",
        date: "2022-09-01",
    },
    {
        idx: 6,
        prodname: "6번제품",
        register: "정숙자",
        date: "2022-08-02",
    },
    {
        idx: 5,
        prodname: "5번제품",
        register: "김진태",
        date: "2022-07-30",
    },
    {
        idx: 4,
        prodname: "4번제품",
        register: "조은혜",
        date: "2022-07-15",
    },
    {
        idx: 3,
        prodname: "3번제품",
        register: "조은혜",
        date: "2022-07-10",
    },
    {
        idx: 2,
        prodname: "2번제품",
        register: "김진태",
        date: "2022-07-01",
    },
    {
        idx: 1,
        prodname: "1번제품",
        register: "정숙자",
        date: "2022-06-12",
    },
];

const ProductList = () => {
    let uri = "/product/";
    const productList = data.map( ( product ) => {
        uri = "/product/" + product.idx;
        return (
            <div class="row">
                <span class="cell col1">{product.idx}</span>
                <span class="cell col2"><Link to={uri}>{product.prodname}</Link></span>
                <span class="cell col3">{product.register}</span>
                <span class="cell col4">{product.date}</span>
            </div>
        );
    });

    return (
        <>
            <div class="row title">
                <span class="cell col1">번호</span>
                <span class="cell col2">제품</span>
                <span class="cell col3">작성자</span>
                <span class="cell col4">등록일</span>
            </div>
            { productList }
        </>
    );
};

export default ProductList;