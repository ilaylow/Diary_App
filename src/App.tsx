import React from 'react';
import { Login } from './Components/Home/Home';
import styles from "./App.module.scss"

export const App : React.FC = () => {
  return (
    <div className={styles.App}>
      <Login/>
    </div>
  );
}
