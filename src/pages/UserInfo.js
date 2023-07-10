import React from "react";
import ImageComponent from "../components/ImageComponent";

import "../css/userinfo.css";

const userPhotoUrl = "http://dev.jinyuone.com/" + sessionStorage.getItem("photo_dir");

const UserInfo = () => {
    //console.log(externalImageUrl);
    return (
        <div id="userInfo">
            <div className="title">
                <div className="leftItem">{sessionStorage.getItem("name")}({sessionStorage.getItem("sabun")})님</div>
                <div className="expandItem"></div>
                <div className="rightItem">개인정보변경</div>
            </div>
            <div className="contents">
                <div className="userPhoto"><ImageComponent imageUrl={userPhotoUrl} width={120} height={150} /></div>
                <div className="rightColumn">
                    <p>개인메모장</p>
                    <p>품의완료</p>
                    <p>시스템알림</p>
                </div>
            </div>
                <div className="text">부서 : {sessionStorage.getItem("part")}</div>
                <div className="text">직책 : {sessionStorage.getItem("grade")}</div>
        </div>
    );
};

export default UserInfo;