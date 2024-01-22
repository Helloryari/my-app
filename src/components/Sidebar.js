import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ data }) => {

    const [expandedCategories, setExpandedCategories] = useState([]);

    const toggleCategory = (title) => {
        const newExpandedCategories = [...expandedCategories];
        const index = newExpandedCategories.indexOf(title);

        if( index === -1 ) {
            newExpandedCategories.push(title);
        } else {
            newExpandedCategories.splice(index, 1);
        }

        setExpandedCategories( newExpandedCategories );
    };

    const generateCategoryMenu = (categoryData) => {

        const isCategoryExpanded = expandedCategories.includes( categoryData.title );

        return (
            <div key={categoryData.title}>
                <a className="gubun" onClick={() => toggleCategory(categoryData.title)}>{categoryData.title}</a>
                
                {isCategoryExpanded && (
                    <ul>
                    {categoryData.items.map((menu) => (
                        <li key={menu.path} className="sidebar-item">
                            <Link to={menu.path}>
                                <p>{menu.name}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            </div>
        );
    };

    return (
        <div className="sidebar">
            {data.map( (category) => generateCategoryMenu(category))}
        </div>
    );
};

export default Sidebar;