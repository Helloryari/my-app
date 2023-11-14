import React from "react";

import UserInfo from "./pages/UserInfo";
import NormalText from "./pages/Normal";

const Main = ( props ) => {
    return (
        <div className="main">
            <div className="content">
                <div className="container">
                    <UserInfo />
                </div>
                
            </div>
        </div>
   );
}

export default Main;