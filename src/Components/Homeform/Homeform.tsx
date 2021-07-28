import React from 'react'
import {Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

interface Props {

}

export const Homeform: React.FC<Props> = () => {
        return (
            <div>
                <Container component = "main" maxWidth = "xs">
                    <Paper className = "" elevation = {3}>
                        <Avatar>
                            <LockOutlinedIcon/>
                        </Avatar>
                    </Paper>
                </Container>
            </div>
        );
}