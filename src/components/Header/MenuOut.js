import React, { Component } from "react";
import { Menu, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

class MenuOut extends Component {
  render() {
    return (
      <Menu pointing borderless fixed="top" fluid>
        <Menu.Item name="home" as={Link} to="/pinit" />
        <Menu.Menu position="right">
          <Menu.Item>
            <Button
              color="google plus"
              href="https://pinitback.herokuapp.com/auth/google"
            >
              <Icon name="google plus" /> Sign in with Google
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default MenuOut;
