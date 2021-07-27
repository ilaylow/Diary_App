import React from "react";
import { Button } from "@material-ui/core";
import styles from "./home.module.scss";
import { styled } from "@material-ui/core";

export const HomeButton = styled(Button)({
    fontFamily: "Lato",
    fontSize: "120%",
    marginLeft: "1%",
    marginRight: "1%",
    transition: "0.5s ease-in-out",
    
    "&:hover":{
        backgroundColor: "white"
    }
})

export const Login: React.FC = () => {
    return (
        <div className = {styles.container}>
            <div className = {styles.header}>
                <h2>Welcome To</h2>
                <h1>Dye-RE.io</h1>
            </div>
            <div className = {styles.buttons}>
                <HomeButton>Login</HomeButton>
                <HomeButton>Sign Up</HomeButton>
            </div>
        </div>
    )
}