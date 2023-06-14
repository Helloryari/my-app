import React from "react";
import { Link } from "react-router-dom";

function Header( props ) {
    return (
        <>
            <header>
                <Link to="/"><h2>(주)진유원 그룹웨어</h2></Link>
                <nav>
                    <ul>
                        <li>메뉴1</li>
                        <li>메뉴2</li>
                        <li>메뉴3</li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;