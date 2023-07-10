import React from "react";
import Sidebar from "./components/Sidebar";
import ProductList from "./pages/ProductList";

const BusinessSub = () => {
    return(
        <div>
            <div className="main">
                <Sidebar />
                <div className="content">
                    <ProductList />
                </div>
            </div>
        </div>
    );
};

export default BusinessSub;