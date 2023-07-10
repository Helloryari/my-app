import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Product = ( props ) => {
    const productId = useParams().productId;
    const location = useLocation();

    return (
        <main>
            <h3 id="subjectText">Details</h3>
            <div id="contentGroup">
                <ul>
                    <li>ProductID : { productId }</li>
                    <li>hash : { location.hash }</li>
                    <li>pathname : { location.pathname }</li>
                    <li>search : { location.search }</li>
                    <li>state : { location.state }</li>
                    <li>key : { location.key }</li>
                </ul>
            </div>
        </main>
    );
}

export default Product;