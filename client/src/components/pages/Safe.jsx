import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ToastProvider } from 'react-toast-notifications';
import { makeStyles } from '@material-ui/core/styles';
import SERVER_URL from '../../environmentVariables';
import EntriesDeck from '../EntriesDeck';
import AddEntryForm from '../forms/AddEntryForm';

const useStyles = makeStyles({
  root: {
    minHeight: '71vh',
    width: '98vw',
  },
});

function Safe(props) {
  Safe.propTypes = {
    login: PropTypes.string.isRequired,
  };

  const history = useHistory();
  const [entries, setEntries] = useState([]);
  const classes = useStyles();

  // Get initial entries from DB.
  useEffect(() => {
    if (props.login === '') {
      history.push('/');
    } else {
      fetch(`${SERVER_URL}/populateDeck`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          login: props.login,
        }),
      }).then((response) => response.json()).then((data) => setEntries(data));
    }
  }, []);

  function addEntry(entry) {
    fetch(`${SERVER_URL}/insertEntry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ login: props.login, entry }),
    }).then((response) => response.json()).then((data) => setEntries(data));
  }

  function deleteEntry(entry) {
    fetch(`${SERVER_URL}/entry`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ login: props.login, entryId: entry }),
    }).then((response) => response.json()).then((data) => setEntries(data));
  }

  function editEntry(entry) {
    fetch(`${SERVER_URL}/entry`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        login: props.login,
        updatedEntry: entry,
      }),
    }).then((response) => response.json()).then((data) => setEntries(data));
  }

  return (
    <div className={classes.root}>
      <EntriesDeck
        entries={entries}
        onDelete={deleteEntry}
        onEdit={editEntry}
      />

      <ToastProvider autoDismiss autoDismissTimeout={5000}>
        <AddEntryForm onSubmit={addEntry} />
      </ToastProvider>
    </div>
  );
}

export default Safe;
