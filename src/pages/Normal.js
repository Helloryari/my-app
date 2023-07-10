import React from "react";

const NormalText = () => {
    return(
        <div id="contentGroup">
            <h1>position: static</h1>
            <p><code>position: static</code>은 position 속성의 기본값입니다. 요소를 나열한 순서대로 배치하며 
            top, right, bottom, left와 같은 속성을 사용할 수 없습니다. (float 속성은 가능!)</p>
            <h1>position: relative</h1>
            <p><code>position: static</code>이었을 때 배치되는 위치를 기준으로 상대적 위치를 지정할 수 있는 속성값입니다. 
            예로들어, static일 때 기준으로 왼쪽으로부터 50px, 위쪽으로부터 30px에 위치해 있다면 style="top:5px; left: 5px;" 을 적용하면 
            왼쪽으로부터 55px, 위쪽으로부터 35px 이동하는 형식입니다. 
            상대적 위치는 top, right, bottom, left 속성을 써서 나타낼 수 있습니다.</p>
            <h1>position: absolute</h1>
            <p>absolute 속성값은 브라우저가 문서의 흐름과 상관없이 (요소를 수직으로 쭉 놓을지, 수평으로 쭉 놓을지 등을 결정하는 것) 
            left, right, top, bottom 속성값을 이용하여 요소를 위치시키는 속성값입니다. 
            이때 기준이 되는 위치는 가장 가까운 부모 요소 혹은 조상 요소 중 position 속성이 relative인 요소입니다.</p>
            <h1>display: block</h1>
            <p>div 태그, p 태그, h 태그, li 태그 등이 이에 해당됩니다.
            기본적으로 가로 영역을 모두 채우며, block 요소 다음에 등장하는 태그는 줄바꿈이 된 것처럼 보입니다. 
            이는 word 같은 문서에서 문단을 표시할 때, 한 문단이 끝난 뒤에 나타나는 요소는 항상 다음 줄에 표시되던 것과 비슷한 맥락입니다. 
            width, height 속성을 지정 할 수 있으며, block 요소 뒤에 등장하는 태그가 그 이전 block 요소에 오른쪽에 배치될 수 있어도 항상 다음 줄에 렌더링됩니다.</p>
            <h1>display: inline</h1>
            <p>span 태그, b 태그, i 태그, a 태그 등이 이에 해당됩니다.
            block 과 달리 줄 바꿈이 되지 않고, width와 height를 지정 할 수 없습니다. word 같은 문서에서 볼드, 이탤릭, 색상, 밑줄 등 글자나 문장에 효과를 주기 위해 
            존재하는 단위라고 할 수 있습니다. 문서에서 특정 부분에 색상을 입힌다고 다음에 나오는 글이 줄바꿈 되지 않듯이 inline 요소 뒤에 나오는 태그 또한 줄바꿈 되지 않고 
            바로 오른쪽에 표시됩니다.</p>
            <h1>display: inline-block</h1>
            <p>block과 inline의 중간 형태라고 볼 수 있는데, 줄 바꿈이 되지 않지만 크기를 지정 할 수 있습니다.
            Internet Explorer 7 이하에서는 사용할 수 없습니다.</p>
        </div>
    );
};

export default NormalText;