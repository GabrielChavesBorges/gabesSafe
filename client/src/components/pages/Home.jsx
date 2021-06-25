import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>

      <Link to="/register">
        <button type="button">Register</button>
      </Link>

      <Link to="/login">
        <button type="button">Log in</button>
      </Link>
    </div>
  );
}

export default Home;
