import axios from "axios";
import { useState } from "react";

import facebooklogo from "./assets/icon-facebook.png";
import twitterlogo from "./assets/icon-twitter.png";
import googlelogo from "./assets/icon-google.png";

import "./styles.css";

const OtherMethods = props => (
    <div id="alternativeLogin">
      <label>Or sign in with:</label>
      <div id="iconGroup">
        <Facebook />
        <Twitter />
        <Google />
      </div>
    </div>
);
  
const Facebook = props => (
    <img src={facebooklogo} width="40" height="40" alt="facebook" />
);

const Twitter = props => (
    <img src={twitterlogo} width="40" height="40" alt="twitter" />
);

const Google = props => (
    <img src={googlelogo} width="40" height="40" alt="google" />
);

function LoginForm () {
    const [sabun, setSabun] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("axios start %s %s", sabun, password);

        try {
                const response = await axios.post("http://dev.jinyuone.com/api/login.php", {
                    sabun: sabun,
                    password: password,
                }, 
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    withCredentials: true
                });

                if (response.data.success) {
                    console.log(response.data);
                    /* 로그인 성공시 이동하는 페이지
                    window.location.href = '/initpage';
                    */
                    sessionStorage.setItem("sabun", sabun);
                    sessionStorage.setItem("loginStatus", true);
                    sessionStorage.setItem("name", response.data.name);
                    sessionStorage.setItem("grade", response.data.grade);
                    sessionStorage.setItem("part", response.data.part);

                    window.location.href = "/";
                } else {
                    console.log(response.data.message);
                    //console.log(response.data.sabun);
                    setError(response.data.message);
                }
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    };

    const renderForm = (
        <div>
            <div className="row">
                <label>Company Code </label>
                <input 
                type="text"
                placeholder="사번"
                value={sabun}
                onChange={(e) => setSabun(e.target.value)}
                />
            </div>
            <div className="row">
                <label>Password </label>
                <input
                type="password" 
                placeholder="비밀번호" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
        </div>
    );

    return (
        <div>
            <div id="loginform">
                <form onSubmit={handleSubmit}>
                    <h2 id="headerTitle">Login</h2>
                    {renderForm}
                    <div id="button" class="row">
                        <button>Log in</button>
                    </div>
                </form>
                <OtherMethods />
                {error && <div id="errorText">{error}</div>}
            </div>
        </div>
    );
}

export default LoginForm;