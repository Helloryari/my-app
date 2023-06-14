import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Product = ( props ) => {
    const productId = useParams().productId;
    const location = useLocation();

    return (
        <>
            <h3>{ productId }번 상품페이지입니다.</h3>
            <ul>
                <li>hash : { location.hash }</li>
                <li>pathname : { location.pathname }</li>
                <li>search : { location.search }</li>
                <li>state : { location.state }</li>
                <li>key : { location.key }</li>
            </ul>
        </>
    );
}

export default Product;