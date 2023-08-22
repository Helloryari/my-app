import React from "react";
import { Link } from "react-router-dom";

import SidebarItem from "./SidebarItem";

const data = {
    "회의": [
        { name: "팀장회의", path: "/meeting/team" }
    ],
    "전략회의": [
        { name: "영업", path: "/conference01" },
        { name: "공장장", path: "/conference02" },
        { name: "경영자원", path: "/conference03" },
        { name: "관리", path: "/conference04" }
    ],
    "모니터링": [
        { name: "탱크유량계", path: "/bargraph" }
    ],
    "즉실천및제안": [
        { name: "제안", path: "/suggest01" },
        { name: "즉실천", path: "/suggest02" }
    ],
    "기초자료": [
        { name: "거래처", path: "/partnership" },
        { name: "납품처", path: "/delivery" },
        { name: "품목", path: "/productList" },
        { name: "품목군", path: "/ptypeList" },
        { name: "부서정보", path: "/bizPart" }
    ]
};

const Sidebar = () => {

    const menus01 = data["회의"];
    const menus02 = data["전략회의"];
    const menus03 = data["모니터링"];
    const menus04 = data["즉실천및제안"];
    const menus05 = data["기초자료"];

    return (
        <div className="sidebar">
            <ul>
                <li><a className="gubun" href="#">회의</a></li>
                {menus01.map( (menu, index) => {
                    return (
                        <li><Link to={menu.path} key={index}>
                            <SidebarItem menu={menu} />
                        </Link>
                        </li>
                    );
                })}
                <li><a className="gubun" href="#">전략회의</a></li>
                {menus02.map( (menu, index) => {
                    return (
                        <li><Link to={menu.path} key={index}>
                            <SidebarItem menu={menu} />
                        </Link>
                        </li>
                    );
                })}
                <li><a className="gubun" href="#">탱크유량계</a></li>
                {menus03.map( (menu, index) => {
                    return (
                        <li><Link to={menu.path} key={index}>
                            <SidebarItem menu={menu} />
                        </Link>
                        </li>
                    );
                })}
                <li><a className="gubun" href="#">즉실천및제안</a></li>
                {menus04.map( (menu, index) => {
                    return (
                        <li><Link to={menu.path} key={index}>
                            <SidebarItem menu={menu} />
                        </Link>
                        </li>
                    );
                })}
                <li><a className="gubun" href="#">기초자료</a></li>
                {menus05.map( (menu, index) => {
                    return (
                        <li><Link to={menu.path} key={index}>
                            <SidebarItem menu={menu} />
                        </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Sidebar;