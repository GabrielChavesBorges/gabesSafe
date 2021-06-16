import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Register() {
    const history = useHistory();
    const emptyRegistration = {
        email: "",
        password: "",
        passwordConfirmation: ""
    };

    let [registration, setRegistration] = useState(emptyRegistration);
    let [buttonClick, setButtonClick] = useState(false);
    let [notification, setNotification] = useState("");

    function register(event) {
        if(event.target.password.value !== "") {
            if(event.target.password.value === 
                event.target.passwordConfirmation.value) {
                setButtonClick(!buttonClick);
            } else {
                setNotification("passwords don't match");
                setRegistration(emptyRegistration);
            }
        } else {
            setNotification("Password field is empty.");
        }
        event.preventDefault();
    }

    useEffect(() => {
        fetch("http://localhost:5000/", {
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
            if(data === "Empty fields.") {
                // First call, can be ignored.
            } else if(data === "User already exists.") {
                setNotification(data);
            } else { // Success.
                setNotification(data);
                history.push("/safe");
            }
        })

        setRegistration(emptyRegistration);
    }, [buttonClick]);

    function updateRegistration(event) {
        const { name, value } = event.target;
        setRegistration(previousState => ({ ...previousState, [name]: value }));
    }

    return (
        <div>
            <h1>Register</h1>

            <form onSubmit={register}>
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
                <button type="submit">Register</button>
            </form>
            <p>{notification}</p>
        </div>
    );
}

export default Register;