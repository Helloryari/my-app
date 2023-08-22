import React from "react";
import Sidebar from "./components/Sidebar";
import ProductList from "./pages/ProductList";

const BusinessSub = () => {
    return(
        <div className="main">
            <Sidebar />
            <ProductList />
        </div>
    );
};

export default BusinessSub;