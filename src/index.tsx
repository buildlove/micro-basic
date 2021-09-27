import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { registerInfos } from './config'
import {
  registerMicroApps,
  start,
  initGlobalState,
  MicroAppStateActions,
} from "qiankun";
import "antd/dist/antd.css";
import "./index.css";

registerMicroApps(registerInfos);

const state = { count: 1 };
// 初始化 state
const actions: MicroAppStateActions = initGlobalState(state);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log("react-base", state, prev);
});
actions.setGlobalState(state);

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
