// Imports: --------------------------------------------------------------------

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useToasts } from 'react-toast-notifications';
import { makeStyles } from '@material-ui/core/styles';
import {
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  FileCopy as FileCopyIcon,
  MoreVert as MoreOptionsIcon,
  Link as LinkIcon,
  Edit as EditIcon,
} from '@material-ui/icons';
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  InputAdornment,
  TextField,
  Menu,
  MenuItem,
} from '@material-ui/core';
import EditEntryForm from './forms/EditEntryForm';
import GabesTheme from './Theme';

// Style: ----------------------------------------------------------------------

const useStyles = makeStyles({
  root: {
    width: '290px',
  },
  header: {
    color: GabesTheme.palette.primary.dark,
  },
  passwordInput: {
    width: '210px',
    marginTop: '10px',
  },
  copyIcon: {
    position: 'relative',
    top: '15px',
  },
  menuItem: {
    position: 'relative',
    left: '5px',
  },
});

// Entry Card: -----------------------------------------------------------------

function EntryCard(props) {
  EntryCard.propTypes = {
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    content: PropTypes.shape.isRequired,
  };

  const { addToast } = useToasts();
  const [editFormVisible, setEditFormVisible] = useState(false);
  const [dropDownMenuAnchor, setDropDownMenuAnchor] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState('password');
  const { content } = props;
  const {
    _id,
    title,
    link,
    login,
    password,
  } = content;

  // Functions: ----------------------------------------------------------------

  function handleDropDownMenuClose() {
    setDropDownMenuAnchor(null);
  }

  function handleEditFormClose() {
    setEditFormVisible(false);
  }

  function editEntry(entry) {
    props.onEdit(entry);
  }

  async function handleClickCopyLink() {
    await navigator.clipboard.writeText(link);
    handleDropDownMenuClose();
    addToast('Link copied to clipboard.', { appearance: 'success' });
  }

  function handleClickEditLink() {
    handleDropDownMenuClose();
    setEditFormVisible(true);
  }

  function handleClickDelete() {
    props.onDelete(_id);
    handleDropDownMenuClose();
  }

  function handleClickShowPassword() {
    setPasswordVisible((previousState) => {
      if (previousState === 'password') {
        return 'text';
      }
      // Else:
      return 'password';
    });
  }

  async function handleClickCopyLogin() {
    await navigator.clipboard.writeText(login);
    addToast('Login copied to clipboard.', { appearance: 'success' });
  }

  async function handleClickCopyPassword() {
    await navigator.clipboard.writeText(password);
    addToast('Password copied to clipboard.', { appearance: 'success' });
  }

  function handleClickMoreOptions(event) {
    setDropDownMenuAnchor(event.target);
  }

  function handleMouseDownPassword(event) {
    event.preventDefault();
  }

  const classes = useStyles();

  // JSX: ----------------------------------------------------------------------

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        title={title}
        subheader={link}
        action={(
          <IconButton>
            <MoreOptionsIcon onClick={handleClickMoreOptions} color="primary" />
          </IconButton>
        )}
      />
      <Menu
        anchorEl={dropDownMenuAnchor}
        open={Boolean(dropDownMenuAnchor)}
        onClose={handleDropDownMenuClose}
      >
        <MenuItem onClick={handleClickCopyLink}>
          <LinkIcon color="primary" />
          <span className={classes.menuItem}>Copy Link</span>
        </MenuItem>

        <MenuItem onClick={handleClickEditLink}>
          <EditIcon color="primary" />
          <span className={classes.menuItem}>Edit</span>
        </MenuItem>

        <MenuItem onClick={handleClickDelete}>
          <DeleteIcon color="primary" />
          <span className={classes.menuItem}>Delete</span>
        </MenuItem>
      </Menu>
      <CardContent>
        <div className={classes.input}>
          <TextField
            id={`${_id}login`}
            label="Login"
            value={login}
            variant="standard"
            margin="normal"
            InputProps={{ readOnly: true }}
          />
          <IconButton
            className={classes.copyIcon}
            aria-label="copy login"
            onClick={handleClickCopyLogin}
          >
            <FileCopyIcon color="primary" />
          </IconButton>
        </div>

        <div className={classes.input}>
          <TextField
            className={classes.passwordInput}
            id={`${_id}password`}
            label="Password"
            value={password}
            variant="standard"
            type={passwordVisible}
            InputProps={{
              readOnly: true,
              endAdornment: (
                <InputAdornment
                  position="end"
                >
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {(passwordVisible === 'text')
                      ? <VisibilityIcon color="primary" />
                      : <VisibilityOffIcon color="primary" />}
                  </IconButton>
                </InputAdornment>),
            }}
          />
          <IconButton
            className={classes.copyIcon}
            aria-label="copy password"
            onClick={handleClickCopyPassword}
          >
            <FileCopyIcon color="primary" />
          </IconButton>
        </div>
      </CardContent>
      <EditEntryForm
        onCloseEdit={handleEditFormClose}
        onSubmit={editEntry}
        entry={content}
        visible={editFormVisible}
      />
    </Card>
  );
}

export default EntryCard;
