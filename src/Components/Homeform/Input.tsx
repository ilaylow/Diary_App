import React from 'react'
import {Avatar, Button, Paper, Grid, TextField, InputAdornment, IconButton} from '@material-ui/core'
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

interface InputProps {
    name: string;
    label: string;
    autoFocus: boolean;
    half?: boolean;
    handleChange: (event: any) => void;
    handleShowPassword?: (event: any) => void;
    variant?: "outlined" | "standard" | "filled" | undefined;
    type?: string;
    style?: string;
}

export const Input: React.FC<InputProps> = ({name, label, autoFocus, half = false, handleChange, type, handleShowPassword, variant= "outlined", style}) => {
    return (
        <Grid item xs = {12} sm = {half ? 6 : 12}>
            <TextField
            name = {name}
            onChange={handleChange}
            variant = {variant}
            required
            fullWidth
            label = {label}
            className = {style}
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