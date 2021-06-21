import React from "react";
import {Card, CardContent, CardActions, IconButton} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

function EntryCard(props) {
  return(
    <Card>
      <CardContent>
        <p>{props.content.title}</p>
        <p>{props.content.link}</p>
        <p>{props.content.login}</p>
        <p>{props.content.password}</p>
      </CardContent>
      <CardActions>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default EntryCard;
