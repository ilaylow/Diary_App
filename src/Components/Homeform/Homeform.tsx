import React from 'react'
import {Avatar, Button, Paper, Grid, Typography, Container, TextField, makeStyles} from '@material-ui/core'
import { useState } from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { styled } from '@material-ui/styles';
import { Input } from './Input';
import { signin, signup } from "../../actions/auth";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

interface Props {
    isSignup: boolean;
}

const useStyles = makeStyles((theme) => ({
    paper:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(1),
        width: "120%",

    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '90%',
        marginTop: theme.spacing(3),
    },

}))

const SubmitButton = styled(Button)({
    color: "white",
    background: "blue",
    fontWeight: "bold",
    marginTop: "3%",
    width: "35%",

    "&:hover":{
        backgroundColor: "blue",
    }
})

const initialState = {firstName: "", lastName: "", email: "", password: ""}

export const Homeform: React.FC<Props> = ({isSignup}) => {

    const styles = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [userState, setUserState] = useState(initialState);

    const handleInput = (event) => {
        setUserState({...userState, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Want to print out user details
        console.log(userState);
        if (isSignup){
            dispatch(signup(userState, history));
        } else{
            dispatch(signin(userState, history));
        }
    }

    return (
        <Container component = "main" maxWidth = "xs">
            <Paper className = {styles.paper} elevation = {3}>
                <Avatar className = {styles.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component = "h1" variant = "h5">{isSignup ? "Sign Up" : "Log In"}</Typography>
                <form className = {styles.form}>
                    <Grid container spacing={2}>
                        {isSignup ? 
                        <>
                        <Input name= "firstName" label = "First Name" handleChange = {handleInput} autoFocus half/>
                        <Input name= "lastName" label = "Last Name" handleChange = {handleInput} autoFocus half/>
                        </>
                        : null}
                        <Input name = "email" label = "Email Address" handleChange = {handleInput} autoFocus half = {false} type = "email"/>
                        <Input name = "password" 
                        label = "Password" 
                        handleChange = {handleInput}
                        autoFocus 
                        half = {false} 
                        type = {showPassword ? "text" : "password"}
                        handleShowPassword = {() => {setShowPassword(!showPassword)}}/>
                    </Grid>
                    <SubmitButton onClick = {handleSubmit}>Submit</SubmitButton>
                </form>
            </Paper>
        </Container>

    );
}