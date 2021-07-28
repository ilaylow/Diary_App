import React from "react";
import { Button } from "@material-ui/core";
import styles from "./home.module.scss";
import { styled } from "@material-ui/core";
import SlideToggle from "react-slide-toggle";
import { Homeform } from "../Homeform/Homeform";

export const HomeButton = styled(Button)({
    color: "white",
    fontFamily: "Lato",
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
                        <HomeButton onClick = {toggle}>Login</HomeButton>
                        <HomeButton onClick = {toggle}>Sign Up</HomeButton>
                    </div>
                    <div ref = {setCollapsibleElement}>
                        <Homeform/>
                    </div>
                </div>
            )}>        
            </SlideToggle>
        </div>
    )
}