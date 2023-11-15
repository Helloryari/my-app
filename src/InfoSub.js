import React from "react";
import Sidebar from "./components/Sidebar";
import UserList from "./pages/UserList";


const menuData = [
    {
        title: "일반자료",
        items: [
            { name: "사내연락망", path: "/contactList" },
            { name: "사원조직도", path: "/organization" },
            { name: "사원정보", path: "/UserList" }
        ]
    },
    {
        title: "표준문서모음",
        items: [
            { name: "품질매뉴얼", path: "/conference01" },
            { name: "관리표준", path: "/conference02" },
            { name: "기술표준", path: "/conference03" },
            { name: "기준", path: "/conference03" },
            { name: "ISO양식", path: "/conference03" },
            { name: "일반양식", path: "/conference04" }
        ]
    },
    {
        title: "브라코",
        items: [
            { name: "거래처관리", path: "/brako01" },
            { name: "품의문서", path: "/brako02" },
            { name: "비용입출근", path: "/brako03" }
        ]
    }
];

const BusinessSub = () => {
    return(
        <div className='main'>
            <Sidebar data={menuData} />
            <div className='right_content'>
                <UserList />
            </div>
        </div>
    );
};

export default BusinessSub;