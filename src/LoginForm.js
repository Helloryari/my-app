import axios from "axios";
import { useState } from "react";

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
    <Anchor icon="facebookIcon"></Anchor>

);

const Twitter = props => (
    <Anchor icon="twitterIcon"></Anchor>
);

const Google = props => (
    <Anchor icon="googleIcon"></Anchor>
);

const Anchor = props => {
    return (
        <a {...props} id={props.icon}>{ props.children }</a>
    );
}

function LoginForm () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
//        console.log("axios start %s %s", username, password);
        const response = await axios.post("http://dev.jinyuone.com/api/login.php", {
            username: username,
            password: password,
        }, 
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            withCredentials: true
        });
        console.log(response.data);
    }
    
    const renderForm = (
        <div>
            <div className="row">
                <label>Username </label>
                <input 
                type="text"
                placeholder="사번"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            </div>
        </div>
    );
}

export default LoginForm;