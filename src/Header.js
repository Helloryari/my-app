import React, { useState } from "react";
import { Link } from "react-router-dom";

import jinyulogo from "./assets/icon-jinyuone.png";

function Header( props ) {

    const [selectedMenu, setSelectedMenu] = useState(null);

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };

    return (
        <>
            <header>
            <a href="/" onClick={() => window.location.reload(true)}>
                <img src={jinyulogo} width="180" height="40" alt="logo" />
            </a>
                <nav>
                    <ul>
                    <li><Link to="#" onClick={() => handleMenuClick("전자결재")} className={selectedMenu === "전자결재" ? "selected" : ""}>전자결재</Link></li>
                        <li><Link to="#" onClick={() => handleMenuClick("지출결의")} className={selectedMenu === "지출결의" ? "selected" : ""}>지출결의</Link></li>
                        <li><Link to="#" onClick={() => handleMenuClick("게시판")} className={selectedMenu === "게시판" ? "selected" : ""}>게시판</Link></li>
                        <li><Link to="#" onClick={() => handleMenuClick("업무")} className={selectedMenu === "업무" ? "selected" : ""}>업무</Link></li>
                        <li><Link to="/businessSub" onClick={() => handleMenuClick("업무지원")} className={selectedMenu === "업무지원" ? "selected" : ""}>업무지원</Link></li>
                        <li><Link to="/InfoSub" onClick={() => handleMenuClick("각종정보")} className={selectedMenu === "각종정보" ? "selected" : ""}>각종정보</Link></li>
                        <li><Link to="#" onClick={() => handleMenuClick("교육관리")} className={selectedMenu === "교육관리" ? "selected" : ""}>교육관리</Link></li>
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