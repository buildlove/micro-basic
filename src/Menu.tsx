import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Menu } from "antd";

interface Props extends RouteComponentProps {
  // ...
}

function MenuBar(props: Props) {
  const { history } = props;
  const goToChildApp = (path: string) => {
    history.push({
      pathname: path,
    });
  };
  return (
    <Menu
      onClick={(menuInfo) => {
        goToChildApp(menuInfo.key as string);
      }}
      style={{ height: "100%" }}
      mode="inline"
    >
      {/* <Menu.Item key="/about">Base About</Menu.Item> */}
      <Menu.Item key="/react17">Child React17</Menu.Item>
      <Menu.Item key="/demoMap">demoMap</Menu.Item>
      <Menu.Item key="/vueApp">Child Vue App</Menu.Item>
    </Menu>
  );
}

export default withRouter(MenuBar);
