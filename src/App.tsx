import React from 'react';
import { Home } from './Components/Home/Home';
import styles from "./App.module.scss"

export const App : React.FC = () => {
  return (
    <div className={styles.App}>
      <Home/>
    </div>
  );
}
