import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import GabesTheme from './Theme';

// Styles: ---------------------------------------------------------------------

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#fff',
    height: '25px',
    padding: '15px',
    borderBottomStyle: 'solid',
    borderBottomColor: GabesTheme.palette.primary.dark,
    borderBottomWidth: 'medium',
  },
  logo: {
    width: '30px',
  },
  logoText: {
    position: 'relative',
    left: '10px',
    bottom: '7px',
    display: 'inline',
    fontSize: '1.2rem',
    color: '#0275d8',
  },
});

// Header: ---------------------------------------------------------------------

function Header() {
  const classes = useStyles();

  return (
    <header>
      <nav className={classes.navbar}>
        <Link className="navbar-brand" to="/">
          <img
            className={classes.logo}
            src="https://image.flaticon.com/icons/png/512/2488/2488702.png"
            alt="Logo"
          />
          <h1 className={classes.logoText}>{'Gabe\'s Safe'}</h1>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
