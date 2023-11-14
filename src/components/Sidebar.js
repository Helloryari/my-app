import React from "react";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ data }) => {

    const generateCategoryMenu = (categoryData) => {
        return (
            <>
                <ul>
                    <li><a className="gubun">{categoryData.title}</a></li>
                    {categoryData.items.map( (menu, index) => (
                        <li key={index}>
                            <Link to={menu.path}>
                                <SidebarItem menu={menu} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </>
        );
    };

    return (
        <div className="sidebar">
            {data.map( (category, index) => (
                <div key={index}>
                    {generateCategoryMenu(category)}
                </div>
            ))}
        </div>
    );
};

export default Sidebar;