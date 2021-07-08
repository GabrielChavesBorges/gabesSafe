import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GabesTheme from './Theme';

// Styles: ---------------------------------------------------------------------

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: GabesTheme.palette.secondary.main,
    borderTopStyle: 'solid',
    borderTopColor: GabesTheme.palette.primary.dark,
    borderTopWidth: 'medium',
    textAlign: 'center',
    padding: '30px 0',
  },
  signature: {
    color: GabesTheme.palette.primary.main,
    fontWeight: '700',
    position: 'relative',
    bottom: '3.5px',
  },
  creativeCommonsLogo: {
    width: '20px',
  },
  credits: {
    color: GabesTheme.palette.primary.main,
    fontSize: '0.7rem',
    marginTop: '20px',
  },
  creditLink: {
    fontWeight: 'bold',
    color: GabesTheme.palette.primary.dark,
    '&:hover': {
      color: GabesTheme.palette.primary.light,
    },
  },
}));

// Footer: ---------------------------------------------------------------------

function Footer() {
  const classes = useStyles();
  const year = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <div>
        <img
          className={classes.creativeCommonsLogo}
          src="https://cdn.worldvectorlogo.com/logos/creative-commons.svg"
          alt="Creative Commons"
        />
        <span className={classes.signature}>{` ${year} Gabriel Borges`}</span>
      </div>

      <div className={classes.credits}>
        <div>
          Photo by
          <a
            className={classes.creditLink}
            href="https://unsplash.com/@jdent?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >
            {' Jason Dent'}
          </a>

          {' on'}

          <a
            className={classes.creditLink}
            href="https://unsplash.com/s/photos/safe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >
            {' Unsplash'}
          </a>
        </div>

        <div>
          Logo made by
          <a
            className={classes.creditLink}
            href="https://www.flaticon.com/authors/smashicons"
            title="Smashicons"
          >
            {' Smashicons'}
          </a>
          {' from'}
          <a
            className={classes.creditLink}
            href="https://www.flaticon.com/"
            title="Flaticon"
          >
            {' www.flaticon.com'}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
