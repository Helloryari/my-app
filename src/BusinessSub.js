import React from "react";
import Sidebar from "./components/Sidebar";
import ProductList from "./pages/ProductList";

const BusinessSub = () => {
    return(
        <div>
            <div className="main">
                <div className="content">
                    <ProductList />
                </div>
                <Sidebar />
            </div>
        </div>
    );
};

export default BusinessSub;