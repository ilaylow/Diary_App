import React from 'react'
import {Avatar, Button, Paper, Grid, TextField, InputAdornment, IconButton} from '@material-ui/core'
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

interface InputProps {
    name: string;
    label: string;
    autoFocus: boolean;
    half: boolean;
    handleChange: (event: any) => void;
    handleShowPassword?: (event: any) => void;
    type?: string;
}



export const Input: React.FC<InputProps> = ({name, label, autoFocus, half, handleChange, type, handleShowPassword}) => {
    return (
        <Grid item xs = {12} sm = {half ? 6 : 12}>
            <TextField
            name = {name}
            onChange={handleChange}
            variant = "outlined"
            required
            fullWidth
            label = {label}
            autoFocus = {autoFocus}
            type = {type}
            InputProps = {(name === "password") ? {
                endAdornment: (
                    <InputAdornment position = "end">
                        <IconButton onClick = {handleShowPassword}>
                            {type === "password" ? <VisibilityOff/> : <Visibility/>}
                        </IconButton>
                    </InputAdornment>
                ),
            } : <></>}
            />

        </Grid>
        
    );
}