import React from "react";
import Notes from "./Notes";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 50,
  },
  button: {
    marginTop: 10,
    textAlign: "right",
  },
  notes: {
    marginTop: 60,
  },
  typography: {
    textAlign: "center",
    marginBottom: 50,
  },
}));

function ToDo() {
  const classes = useStyles();
  //hooks
  const [todos, setTodos] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const onChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const onClickButton = () => {
    setTodos([...todos, inputValue]);
  };

  return (
    <Container className={classes.container} maxWidth="sm">
      <Grid container>
        <Grid item xs={12}>
          <Typography className={classes.typography} variant="h5">
            ToDo List App
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Note"
            value={inputValue}
            onChange={onChangeInputValue}
          />
        </Grid>

        <Grid className={classes.button} item xs={12}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={onClickButton}
          >
            Add note
          </Button>
        </Grid>
        <Grid className={classes.notes} item xs={12}>
          <Notes />
        </Grid>
      </Grid>
    </Container>
  );
}

export default ToDo;
