import React, { useState } from "react";
import { Link } from "react-router-dom";

import jinyulogo from "./assets/icon-jinyuone.png";

function Header( props ) {

    const [selectedMenu, setSelectedMenu] = useState(null);

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };

    const logout = () => {
        // 세션 스토리지에서 필요한 세션 정보 삭제
        sessionStorage.removeItem("sabun");
        sessionStorage.removeItem("loginStatus");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("grade");
        sessionStorage.removeItem("part");
        sessionStorage.removeItem("photo_dir");
      
        // 다른 로그아웃 관련 작업을 수행할 수 있습니다.
      
        // 로그아웃 후 리다이렉트 등의 작업을 수행할 수 있습니다.
        // 예를 들면, 홈페이지로 리다이렉트하는 경우:
        window.location.href = "/";
    };

    return (
        <div id='header'>
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
                    <li><Link to="#" onClick={logout}>세션아웃</Link></li>
                    <li>로그인정보</li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;