import React from "react";
import {Container, Paper, Typography} from "@material-ui/core";

interface Props{

}

export const Taskpage : React.FC<Props> = ({}) => {
    return (
        <Container component = "main" maxWidth = "xs">
            <Paper elevation = {3}>
                <Typography component = "h1" variant = "h5">What are you planning for today?</Typography>
            </Paper>
        </Container>
    )
}