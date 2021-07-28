import React, { useState } from "react";
import { Button, StylesProvider } from "@material-ui/core";
import styles from "./home.module.scss";
import { styled } from "@material-ui/core";
import SlideToggle from "react-slide-toggle";
import { Homeform } from "../Homeform/Homeform";

export const HomeButton = styled(Button)({
    color: "white",
    fontFamily: "Consolas",
    fontSize: "120%",
    marginLeft: "1%",
    marginRight: "1%",
    transition: "0.5s ease-in-out",
    background: "rgb(0, 0, 0, 0.2)",
    
    "&:hover":{
        backgroundColor: "white",
        color: "black",
    }
})

export const Home: React.FC = () => {
    
    const [isSignUp, setSignUp] = useState(true);
    const [isOpen, setOpen] = useState(false);

    const showForm = (toggleFunc, bool) => {
        if (!isOpen){
            toggleFunc();
            setOpen(!isOpen);
        }
        setSignUp(bool);
    }

    return (
        <div className = {styles.container}>
            <div className = {styles.header}>
                <h2>Welcome To</h2>
                <h1>Dye-RE.io</h1>
            </div>
            <SlideToggle duration = {500} collapsed
            render = {({toggle, setCollapsibleElement, progress}) => (
                <div>
                    <div className = {styles.buttons}>
                        <HomeButton onClick = {() => {showForm(toggle, false)}}>Login</HomeButton>
                        <HomeButton onClick = {() => {showForm(toggle, true)}}>Sign Up</HomeButton>
                    </div>
                    <div ref = {setCollapsibleElement} className = {styles.form}>
                        <Homeform isSignup = {isSignUp}/>
                    </div>
                </div>
            )}>        
            </SlideToggle>
        </div>
    )
}