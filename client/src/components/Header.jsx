import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (

    <header>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              className="d-inline-block align-text-top logo"
              src="https://image.flaticon.com/icons/png/512/2488/2488702.png"
              alt="Logo"
            />
            <h1 className="logo-text">{'Gabe\'s Safe'}</h1>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
