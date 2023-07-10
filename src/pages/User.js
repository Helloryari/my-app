import React from "react";
import { useParams } from "react-router-dom";

const User = ( props ) => {
    const userId = useParams().userId;

    return (
        <main>
            <h3 id="subjectText">Details</h3>
            <div id="contentGroup">
                <span>{ userId }님의 상세정보 페이지입니다.</span>
            </div>
        </main>
    );
}

export default User;