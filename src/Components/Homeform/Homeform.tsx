import React from 'react'
import {Avatar, Button, Paper, Grid, Typography, Container, TextField} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import styles from "./homeform.module.scss";

interface Props {
    isSignup: boolean;
}

export const Homeform: React.FC<Props> = ({isSignup}) => {

    const handleInput = (event) => {
        console.log("test");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <Container component = "main" maxWidth = "xs">
                <Paper className = "" elevation = {3}>
                    <Avatar>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography variant = "h5">{isSignup ? "Sign Up" : "Log In"}</Typography>
                    <form className = {styles.form}>
                        <Grid container spacing={2}>
                            {isSignup ? 
                            <>
                            <TextField name= "firstName" label = "First Name" onChange = {handleInput} required/>
                            <TextField name= "lastName" label = "Last Name" onChange = {handleInput} required/>
                            </>
                            : null}
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </div>
    );
}