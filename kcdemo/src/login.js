import React, { Component } from "react";
import reactDom from "react-dom";
import Kcauth from "./Auths/kc/kc"

function Login(){
    return(
        <div>
            <h1>Hey User, Welcome to FI, Please Authenticate yourself</h1>
            <button onClick={window.location('localhost:8080/')}>Log in</button>
        </div>
    );
}

export default Login;