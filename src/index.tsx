import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import App from "./App";

import {
  registerMicroApps,
  start,
  initGlobalState,
  MicroAppStateActions,
} from "qiankun";

registerMicroApps([
  {
    name: 'react17',
    entry: '//localhost:7101',
    container: '#subapp-viewport',
    activeRule: '/react17',
  },
  {
    name: 'localReact17',
    entry: '//localhost:2235/localReact17',
    container: '#localReact17',
    activeRule: '/localReact17',
  },
  {
    name: "react app", // app name registered
    entry: "//localhost:20000",
    container: "#reactApp",
    activeRule: "/reactApp",
  },
  {
    name: "vue app", // app name registered
    entry: "//localhost:10000",
    container: "#vueApp",
    activeRule: "/vueApp",
  },
]);

const state = { count: 1 };
// 初始化 state
const actions: MicroAppStateActions = initGlobalState(state);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log("react-base", state, prev);
});
actions.setGlobalState(state);
// actions.offGlobalStateChange();

start({
  sandbox: {
    strictStyleIsolation: true,
    // experimentalStyleIsolation: true,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
