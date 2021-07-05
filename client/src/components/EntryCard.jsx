import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import {
  Card, CardContent, CardActions, IconButton, Typography,
} from '@material-ui/core';
import EditEntryForm from './forms/EditEntryForm';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  label: {
    fontSize: 14,
    color: '#4b7bec',
  },
  info: {
    fontSize: 18,
    color: '#4b6584',
  },
});

function EntryCard(props) {
  EntryCard.propTypes = {
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    content: PropTypes.shape.isRequired,
  };

  const { content } = props;
  const {
    _id,
    title,
    link,
    login,
    password,
  } = content;

  function deleteEntry() {
    props.onDelete(_id);
  }

  function editEntry(entry) {
    props.onEdit(entry);
  }

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.label}>
          Title
        </Typography>

        <Typography className={classes.info}>
          {title}
        </Typography>

        <Typography className={classes.label}>
          Link
        </Typography>

        <Typography className={classes.info}>
          {link}
        </Typography>

        <Typography className={classes.label}>
          Login
        </Typography>

        <Typography className={classes.info}>
          {login}
        </Typography>

        <Typography className={classes.label}>
          Password
        </Typography>

        <Typography className={classes.info}>
          {password}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={deleteEntry}>
          <DeleteIcon />
        </IconButton>

        <EditEntryForm
          entry={content}
          onSubmit={editEntry}

        />
      </CardActions>
    </Card>
  );
}

export default EntryCard;
