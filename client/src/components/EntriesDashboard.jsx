import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid"
import EntryCard from "./EntryCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function EntriesDashboard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {props.entries.map((entry) => {
            return(
              <Grid key={entry._id + "grid"} item xs={3}>
                <EntryCard key={entry._id} content={entry}/>
              </Grid>
            )
        })}
      </Grid>
    </div>
  );
}

export default EntriesDashboard;