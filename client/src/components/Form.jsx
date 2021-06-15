import { Link } from "react-router-dom";
import React from "react";
import Field from "./Field";

function Form(props) {

  return(
    <form>
      {props.fields.map(field => <Field label={field}/>)}
      <Link to={props.route}><button>{props.buttonName}</button></Link>
    </form>
  );
}

export default Form;