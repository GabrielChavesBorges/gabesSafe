import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/">
        <h1>{'Gabe\'s Safe'}</h1>
      </Link>
    </header>
  );
}

export default Header;
