import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import EntryCard from './EntryCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function EntriesDeck(props) {
  EntriesDeck.propTypes = {
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    entries: PropTypes.arrayOf(PropTypes.shape).isRequired,
  };

  const classes = useStyles();
  const { entries } = props;
  const { _id: id } = entries;

  function deleteEntry(entry) {
    props.onDelete(entry);
  }

  function editEntry(entry) {
    props.onEdit(entry);
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {entries.map((entry) => (
          <Grid key={`${id}grid`} item xs={3}>
            <EntryCard
              key={id}
              content={entry}
              onDelete={deleteEntry}
              onEdit={editEntry}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default EntriesDeck;
