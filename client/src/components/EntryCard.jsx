import React from "react";
import {Card, CardContent, CardActions, IconButton, Typography} 
  from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditEntryForm from "./EditEntryForm";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  label: {
    fontSize: 14,
    color: "#4b7bec"
  },
  info: {
    fontSize: 18,
    color: "#4b6584"
  }
});

function EntryCard(props) {
  function deleteEntry() {
    props.onDelete(props.content._id);
  }

  function editEntry(entry) {
    props.onEdit(entry);
  }

  const classes = useStyles();

  return(
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.label}>
          Title
        </Typography>

        <Typography className={classes.info}>
          {props.content.title}
        </Typography>

        <Typography className={classes.label}>
          Link
        </Typography>

        <Typography className={classes.info}>
          {props.content.link}
        </Typography>

        <Typography className={classes.label}>
          Login
        </Typography>

        <Typography className={classes.info}>
          {props.content.login}
        </Typography>

        <Typography className={classes.label}>
          Password
        </Typography>

        <Typography className={classes.info}>
          {props.content.password}
        </Typography>
        
        
        
        
      </CardContent>
      <CardActions>
        <IconButton onClick={deleteEntry}>
          <DeleteIcon />
        </IconButton>

        <EditEntryForm entry={props.content} onSubmit={editEntry}/>
      </CardActions>
    </Card>
  );
}

export default EntryCard;
