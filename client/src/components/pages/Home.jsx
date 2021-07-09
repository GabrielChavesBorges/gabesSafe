import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import GabesTheme from '../Theme';

const useStyles = makeStyles(() => ({
  content: {
    textAlign: 'center',
  },
  button: {
    display: 'block',
    margin: '30px auto',
    width: '300px',
    height: '70px',
    'font-weight': '500',
    'font-size': '1.2rem',
  },
  slogan: {
    padding: '12%',
    'padding-bottom': '8%',
    'font-size': '1.5rem',
    'font-weight': '700',
  },
  image: {
    width: '100%',
    height: '100%',
    'border-left-style': 'solid',
    'border-left-color': GabesTheme.palette.secondary.main,
    'border-left-width': '20px',
  },

}));

function Home() {
  const classes = useStyles();
  const slogan = 'Keep your passwords safe without headaches. Gabe\'s safe will remember all your passwords for you.';
  const imgUrl = 'https://images.unsplash.com/photo-1582139329536-e7284fece509?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80';

  return (
    <Grid container spacing={0}>
      <Grid className={classes.content} item lg={6} md={6} sm={12} xs={12}>
        <p className={classes.slogan}>{slogan}</p>

        <Link to="/login">
          <Button
            className={classes.button}
            color="secondary"
            variant="outlined"
            type="button"
          >
            Log in
          </Button>
        </Link>

        <Link to="/register">
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
            type="button"
          >
            Register
          </Button>
        </Link>

      </Grid>
      <Grid item md={6}>
        <img
          className={classes.image}
          src={imgUrl}
          alt="Safe vault."
        />
      </Grid>
    </Grid>
  );
}

export default Home;
