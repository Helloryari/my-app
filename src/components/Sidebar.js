import React from "react";
import { Link } from "react-router-dom";

import SidebarItem from "./SidebarItem";

const Sidebar = () => {
    const menus = [
        { name: "거래처", path: "/partnership" },
        { name: "납품처", path: "/delivery" },
        { name: "품목", path: "/productList" },
        { name: "품목군", path: "/ptypeList" },
        { name: "부서정보", path: "/bizPart" }
    ];

    return (
        <div className="sidebar">
            {menus.map( (menu, index) => {
                return (
                    <Link to={menu.path} key={index}>
                        <SidebarItem menu={menu} />
                    </Link>
                );
            })}
        </div>
    );
};

export default Sidebar;