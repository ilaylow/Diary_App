import React from "react";
import {Grid, Container, makeStyles, Paper, Typography, TextField} from "@material-ui/core";
import { Input } from '../Homeform/Input';
import { useState }from "react";

interface Props{

}

const font1 = "Indie Flower, cursive";

const useStyles = makeStyles((theme) => ({
    container:{
        float: "left",
        textAlign: "center",
        marginLeft: "3%",
        border: "solid white",
        marginTop: "10%",
    },

    paper:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: "auto",
        padding: theme.spacing(1),
        width: "80%",
    },
    form: {
        marginTop: "5%",
        width: "50%"
    },
    
    inputField1: {
        width: "80%",
        float: "left",
        marginLeft: "5%",
        fontFamily: font1,
    }
}));

const initialTask = {title : "", prority: "", description: ""}

export const Taskpage : React.FC<Props> = ({}) => {
    const styles = useStyles();

    const [taskState, setTaskState] = useState(initialTask);

    const handleInput = (e) => {
        setTaskState({...taskState, [e.target.name]: e.target.value})
    }

    return (
        <div style = {{border: "solid white"}}>
            <Container component = "main" maxWidth = "md" className = {styles.container}>
                <Paper elevation = {3} className = {styles.paper}>
                    <Typography style = {{fontFamily: font1, fontWeight: "bold"}} 
                    component = "h1" 
                    variant = "h5">What are you planning for today?</Typography>
                    <form className = {styles.form}>
                        <Grid container spacing = {3}>
                            <Input name = "title" label = "Title" autoFocus  handleChange = {handleInput} variant = "standard" style = {styles.inputField1}/>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </div>
    )
}