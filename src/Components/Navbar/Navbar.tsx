import React from "react";
import { font1 } from "../Taskpage";
import { Button, makeStyles, styled } from "@material-ui/core";

interface NavbarProps {
  loggedIn: boolean;
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    background: "rgba(0,0,0,0.3)",
    marginBottom: "0%",
  },

  title: {
    color: "white",
    margin: "auto",
    marginTop: "1.1%",
    marginBottom: "1.1%",
    marginLeft: "1%",
    fontSize: "1.9rem",
    fontFamily: font1,
  },

  logout: {
    margin: "auto",
    marginLeft: "77%",
  },
}));

const LogOutButton = styled(Button)({
  color: "white",
  width: "150%",
  paddingTop: "12%",
  paddingBottom: "12%",
  border: "solid white",
  fontFamily: font1,
  fontSize: "1.1rem",

  "&:hover": {
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});

export const Navbar: React.FC<NavbarProps> = ({ loggedIn = true }) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Dye-Re.io</h2>
      <div className={styles.logout}>
        <LogOutButton>{loggedIn ? "Log Out" : null}</LogOutButton>
      </div>
    </div>
  );
};
