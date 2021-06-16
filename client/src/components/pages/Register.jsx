import React, { useEffect, useState } from "react";

function Register() {
    const emptyRegistration = {
        email: "",
        password: "",
        passwordConfirmation: ""
    };

    let [registration, setRegistration] = useState(emptyRegistration);
    let [content, setContent] = useState("Pending");
    let [buttonClick, setButtonClick] = useState(false);

    function register(event) {
        if(event.target.password.value !== "") {
            if(event.target.password.value === 
                event.target.passwordConfirmation.value) {
                setButtonClick(!buttonClick);
            } else {
                console.log("passwords don't match");
                setRegistration(emptyRegistration);
            }
        } else {
            console.log("Password not filled");
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
        .then(data => console.log(data))

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
                    value={registration.email}
                    onChange={updateRegistration}
                />
                <input 
                    name="password" 
                    placeholder="Password"
                    value={registration.password}
                    onChange={updateRegistration}
                />
                <input 
                    name="passwordConfirmation" 
                    placeholder="Confirm your password"
                    value={registration.passwordConfirmation}
                    onChange={updateRegistration}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;