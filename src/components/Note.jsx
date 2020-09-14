import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  itemText: {
    wordWrap: "break-word",
    paddingRight: 15,
  },
  button: {
    "&:hover,&.Mui-focusVisible": {
      color: "#1976d2",
    },
  },
}));

function Note({ note, index, onResetNote, onDisabledNote }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ListItem>
        <ListItemText className={classes.itemText} primary={note} />
        <ListItemSecondaryAction>
          <IconButton
            className={classes.button}
            onClick={() => {
              onResetNote(index);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </React.Fragment>
  );
}

export default Note;
