import React from "react";
import {Card, CardContent, CardActions, IconButton} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditEntryForm from "./EditEntryForm";

function EntryCard(props) {
  function deleteEntry() {
    props.onDelete(props.content._id);
  }

  function editEntry(entry) {
    props.onEdit(entry);
  }

  return(
    <Card>
      <CardContent>
        <p>{props.content.title}</p>
        <p>{props.content.link}</p>
        <p>{props.content.login}</p>
        <p>{props.content.password}</p>
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
