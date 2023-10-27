import React from "react";
import Sidebar from "./components/Sidebar";
import ProductList from "./pages/ProductList";

const menuData = [
    {
        title: "회의",
        items: [
            { name: "팀장회의", path: "/meeting/team" }
        ]
    },
    {
        title: "전략회의",
        items: [
            { name: "영업", path: "/conference01" },
            { name: "공장장", path: "/conference02" },
            { name: "경영자원", path: "/conference03" },
            { name: "관리", path: "/conference04" }
        ]
    },
    {
        title: "모니터링",
        items: [
            { name: "탱크유량계", path: "/bargraph" }
        ]
    },
    {
        title: "제안및즉실천",
        items: [
            { name: "제안", path: "/suggest01" },
            { name: "즉실천", path: "/suggest02" }
        ]
    },
    {
        title: "기초차료",
        items: [
            { name: "거래처", path: "/partnership" },
            { name: "납품처", path: "/delivery" },
            { name: "품목", path: "/productList" },
            { name: "품목군", path: "/ptypeList" },
            { name: "부서정보", path: "/bizPart" }
        ]
    }
];

const BusinessSub = () => {
    return(
        <div className="main">
            <Sidebar data={menuData} />
            <ProductList />
        </div>
    );
};

export default BusinessSub;