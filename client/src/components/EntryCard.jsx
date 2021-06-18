import React from "react";
import {Card, CardContent} from "@material-ui/core";

function EntryCard(props) {
  return(
    <Card>
      <CardContent>
        <p>{props.content.title}</p>
        <p>{props.content.link}</p>
        <p>{props.content.login}</p>
        <p>{props.content.password}</p>
      </CardContent>
    </Card>
  );
}

export default EntryCard;
