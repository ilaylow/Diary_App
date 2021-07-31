import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Taskpage } from "./Components/Taskpage/index";
import { Navbar } from "./Components/Navbar/Navbar";
import styles from "./App.module.scss";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Navbar loggedIn={true} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tasks" component={Taskpage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
