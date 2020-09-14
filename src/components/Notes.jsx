import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Note from "./Note";
import List from "@material-ui/core/List";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const areEqual = (prevProps, nextProps) => {
  if (prevProps.notes === nextProps.notes) return true;
  return false;
};

const Notes = React.memo(({ notes, onResetNote }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <List className={classes.root}>
        {notes.map((item, index) => {
          return (
            <Note
              key={index}
              note={item}
              index={index}
              onResetNote={onResetNote}
            />
          );
        })}
      </List>
    </React.Fragment>
  );
}, areEqual);

export default Notes;
