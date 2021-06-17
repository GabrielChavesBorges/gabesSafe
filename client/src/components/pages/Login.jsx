import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {
    const history = useHistory();
    const emptyLogin = {
        email: "",
        password: ""
    };

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
        } else {
            fetch("http://localhost:5000/login", {
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
                    history.push("/safe");
                } else {
                    console.log("Unrecognized return from server.");
                    setLogin(emptyLogin);
                }
            });
        }
    }
        
    return (
        <div>
            <h1>Login</h1>

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

            <p>{notification}</p>
        </div>
    );
}

export default Login;
        