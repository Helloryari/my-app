import React from "react";
import ProductList from "./ProductList";

import "./styles.css";

const Main = ( props ) => {
    return (
            <main>
                <div id="mainBox">
                    안녕하세요 {sessionStorage.getItem("name")}님({sessionStorage.getItem("part")}:{sessionStorage.getItem("grade")}) 진유원 그룹웨어 메인페이지입니다.
                </div>
                <div id="contentGroup">
                    <h1>position: sticky</h1>
                    <p>이용할 수 있는 <code>position: sticky</code>라고 불리우는 또 다른 위치잡기 값이 있습니다. 이것은 다른 위치잡기보다 다소 새로운 것입니다. 이것은 기본적으로 상대 위치잡기와 고정 위치잡기가 혼합된 하이브리드로서, 위치잡기 요소가 특정 임계점에(예로 뷰포트의 상단으로부터 10px) 스크롤될 때까지 상대 위치잡기처럼 행동할 수 있다가 그 뒤에 위치가 고정됩니다. 예를 들어, 탐색 막대가 특정 지점까지 페이지와 함께 스크롤한 다음 페이지 상단에 흡착되도록 사용할 수 있습니다.</p>
                    <pre>
                        ...<br />
                        ...<br />
                        ...<br />
                        ...<br />
                        ...<br />
                    </pre>
                    <p><code>position: sticky</code>의 일반적 사용례기도 하고 흥미로운 사용례는 스크롤링하다 제목에 도달하면 서로 다른 제목이 페이지의 맨 위에 흡착되는 색인 페이지를 만드는 것입니다. 이런 사례에 대한 마크업은 다음과 같은 모습일 수 있습니다:</p>                    
                </div>
                <div id="table">
                    <h1>제품설명</h1>
                </div>
                <div id="table">
                    <ProductList />
                </div>
            </main>
            
   );
}

export default Main;