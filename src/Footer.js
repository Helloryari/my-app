import React from "react";
import { Link } from "react-router-dom";

function Footer( props ) {
    return (
        <>
            <footer>
                <Link to="http://www.jinyuone.com">(주)진유원</Link> | 박재현 | 124-81-30736 | 전화 : 031-352-0181 | 팩스 : 031-352-8070 | 우편번호:18529 | 경기도 화성시 팔탄면 율암리 506-1 | 경기도 화성시 팔탄면 시청로 874-29번지
            </footer>
        </>
    );
}

export default Footer;