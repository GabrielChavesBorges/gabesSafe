import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Register() {
    const history = useHistory();
    const emailValidation = /(.+)@(.+){2,}\.(.+){2,}/;
    const emptyRegistration = {
        email: "",
        password: "",
        passwordConfirmation: ""
    };

    let [registration, setRegistration] = useState(emptyRegistration);
    let [notification, setNotification] = useState("");

    function updateRegistration(event) {
        const { name, value } = event.target;
        setRegistration(previousState => ({ ...previousState, [name]: value }));
    }

    function register(event) {
        if (registration.email === "" ||
            registration.password === "" ||
            registration.passwordConfirmation === "") {
            setNotification("Please fill out all fields.");
        } else if (!emailValidation.test(registration.email)) {
            setNotification("Invalid email.");
            setRegistration(emptyRegistration);
        } else if (registration.password !== 
                registration.passwordConfirmation) {
                setNotification("Passwords don't match.");
                setRegistration(emptyRegistration);
        } else {
            fetch("http://localhost:5000/register", {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                "body": JSON.stringify({
                    "email": registration.email,
                    "password": registration.password
                })
            })
                .then(response => response.text())
                .then(data => {
                    if(data === "User already exists.") {
                        setNotification(data);
                        setRegistration(emptyRegistration);
                    } else if(data === "User created.") {
                        setNotification(data);
                        history.push("/safe");
                    } else {
                        setNotification("Error, please try again.");
                        setRegistration(emptyRegistration);
                    }
                });
        }
        event.preventDefault();
    }

    return (
        <div>
            <h1>Register</h1>
            <form>
                <input 
                    name="email" 
                    placeholder="Email"
                    type="email"
                    value={registration.email}
                    onChange={updateRegistration}
                />

                <input 
                    name="password" 
                    placeholder="Password"
                    type="password"
                    value={registration.password}
                    onChange={updateRegistration}
                />

                <input 
                    name="passwordConfirmation" 
                    placeholder="Confirm your password"
                    type="password"
                    value={registration.passwordConfirmation}
                    onChange={updateRegistration}
                />
                
                <button onClick={register}>Register</button>
            </form>


            <p>{notification}</p>
        </div>
    );
}

export default Register;