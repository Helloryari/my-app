import React from "react";
import { Link } from "react-router-dom";

import jinyulogo from "./assets/icon-jinyuone.png";

function Header( props ) {
    return (
        <>
            <header>
                <Link to="/"><img src={jinyulogo} width="180" height="40" alt="logo" /></Link>
                <nav>
                    <ul>
                        <li><Link to="#">전자결재</Link></li>
                        <li><Link to="#">지출결의</Link></li>
                        <li><Link to="#">게시판</Link></li>
                        <li><Link to="#">업무</Link></li>
                        <li><Link to="/userList">업무지원</Link></li>
                        <li><Link to="/businessSub">각종정보</Link></li>
                        <li><Link to="#">교육관리</Link></li>
                    </ul>
                </nav>
                <nav>
                    <ul>
                       <li>세션</li>
                        <li>로그인정보</li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;