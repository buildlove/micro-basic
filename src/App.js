/* eslint-disable */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./index.module.css";
import MenuBar from "./Menu";
import Desensitization from './desensitizationInformationQuery'

function App() {
  return (
    <Router>
      <div className={styles.container}>
        {/* <Desensitization num='123123123123123' type='person'></Desensitization> */}
        <div className={styles.left}>
          <MenuBar></MenuBar>
        </div>
        <div className={styles.right}>
          {/* <Switch>
            <Route path="/about">
              <h1>about</h1>
            </Route>
          </Switch> */}
          <div id="react17"></div>
          {/* <div id="demoMap"></div>
          <div id="vueApp"></div> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
