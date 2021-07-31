import React from "react";
import {
  Grid,
  Container,
  makeStyles,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";
import { styled } from "@material-ui/core";
import { Input } from "../Homeform/Input";
import { useState } from "react";

interface Props {}

export const font1 = "Indie Flower, cursive";

const useStyles = makeStyles((theme) => ({
  container: {
    float: "left",
    paddingLeft: "0%",
    marginTop: "6%",
    minHeight: "60vh",
  },

  paper: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "14%",
    padding: theme.spacing(1),
    width: "60%",
    height: "100%",
  },
  form: {
    marginTop: "5%",
    width: "50%",
  },

  inputStyle: {
    fontFamily: font1,
  },

  inputField1: {
    width: "150%",
    float: "left",
    marginLeft: "24%",
  },

  inputField2: {
    width: "155%",
    float: "left",
    marginTop: "12%",
    marginLeft: "22%",
  },
}));

const initialTask = { title: "", prority: "", description: "" };

const DoneButton = styled(Button)({
  marginTop: "5%",
  backgroundColor: "blue",
  color: "white",
  width: "60%",
  margin: "auto",
  fontWeight: "bold",

  "&:hover": {
    backgroundColor: "blue",
  },
});

export const Taskpage: React.FC<Props> = ({}) => {
  const styles = useStyles();

  const [taskState, setTaskState] = useState(initialTask);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskState({ ...taskState, [e?.target.name]: e?.target.value });
  };

  const handleFormSubmit = (e: React.ChangeEvent<{}>) => {
    e.preventDefault();
  };

  return (
    <div>
      <Container component="main" maxWidth="md" className={styles.container}>
        <Paper elevation={5} className={styles.paper}>
          <Typography
            style={{ fontFamily: font1, fontWeight: "bold", marginTop: "3%" }}
            component="h1"
            variant="h4"
          >
            What are you planning for today?
          </Typography>
          <form className={styles.form}>
            <Input
              name="title"
              label="Title"
              autoFocus
              handleChange={handleInput}
              variant="standard"
              style={styles.inputField1}
              inputStyle={styles.inputStyle}
            />
            {/* Insert in priority manager here */}
            <Input
              name="description"
              label="Description"
              autoFocus
              rows={10}
              required={false}
              multiline={true}
              handleChange={handleInput}
              variant="outlined"
              style={styles.inputField2}
            />
          </form>
          <DoneButton>Done</DoneButton>
        </Paper>
      </Container>
    </div>
  );
};
