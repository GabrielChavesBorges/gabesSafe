import React from "react";
import Form from "../Form";

function Register() {
    const fields = ["email", "password"];
    const buttonName = "Register";
    const route = "/safe";

    return (
        <div>
            <h1>Register</h1>
            <Form fields={fields} buttonName={buttonName} route={route}/>
        </div>
    );
}

export default Register;