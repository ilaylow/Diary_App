import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import styles from "./App.module.scss"

export const App : React.FC = () => {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Switch>
          <Route exact path="/" component = {Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
