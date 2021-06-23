import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login(props) {
    let history = useHistory();
    const emailValidation = /(.+)@(.+){2,}\.(.+){2,}/;
    const emptyLogin = {
        email: "",
        password: ""
    };
    const serverPath = "https://gabes-safe.herokuapp.com";

    let [notification, setNotification] = useState("");
    let [login, setLogin] = useState(emptyLogin);

    function updateLogin(event) {
        const { name, value } = event.target;
        setLogin(previousState => ({...previousState, [name]: value}));
    }

    function attemptLogin(event) {
        if(login.email === "" || 
            login.password === "") {
            setNotification("Please fill out all fields.");
        } else if(!emailValidation.test(login.email)) {
            setNotification("Invalid email.");
            setLogin(emptyLogin);
        }else {
            fetch(serverPath + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            "body": JSON.stringify({
                "email": login.email,
                "password": login.password
            })
        })
            .then(response => response.text())
            .then(data => {
                if (data === "User not found.") {
                    setNotification(data);
                    setLogin(emptyLogin);
                } else if (data === "Invalid password.") {
                    setNotification(data);
                    setLogin(emptyLogin);
                } else if (data === "Login successful.") {
                    props.signin(login.email, history);
                    // App will use argument as a prop to Safe jsx.
                } else {
                    console.log("Unrecognized return from server.");
                    setLogin(emptyLogin);
                }
            });
        }
        event.preventDefault();
    }
        
    return (
        <div>
            <h1>Login</h1>

            <form>
                <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={login.email}
                    onChange={updateLogin}
                />

                <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={login.password}
                    onChange={updateLogin}
                />

                <button onClick={attemptLogin}>Login</button>
            </form>

            <p>{notification}</p>
        </div>
    );
}

export default Login;
        