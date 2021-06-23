import React from "react";
import {Link} from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/register"><button>Register</button></Link>
            <Link to="/login"><button>Log in</button></Link>
        </div>
    );
}

export default Home;