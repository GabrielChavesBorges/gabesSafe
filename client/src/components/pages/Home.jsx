import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const slogan = 'Keep your passwords safe without headaches. Gabe\'s safe will remember all your passwords for you.';
  const imgUrl = 'https://images.unsplash.com/photo-1582139329536-e7284fece509?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80';
  return (
    <div>
      <div className="home-content">
        <p className="slogan">{slogan}</p>

        <Link to="/register">
          <button
            className="home-btn btn btn-primary btn-lg"
            type="button"
          >
            Register
          </button>
        </Link>

        <Link to="/login">
          <button
            className="home-btn btn btn-outline-light btn-lg"
            type="button"
          >
            Log in
          </button>
        </Link>
      </div>

      <img
        className="home-img"
        src={imgUrl}
        alt="Safe vault."
      />
    </div>
  );
}

export default Home;
