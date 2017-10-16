import React, { Component } from "react";
import { Menu, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../actions";

class MenuIn extends Component {
  handleClick() {
    this.props.signOutUser(localStorage.getItem("token")).then(() => {
      localStorage.removeItem("token");
    });
  }
  render() {
    return (
      <Menu pointing borderless fixed="top" fluid>
        <Menu.Item name="home" as={Link} to="/pinit" />
        <Menu.Item name="my profile" as={Link} to="/pinit/profile" />
        <Menu.Menu position="right">
          <Menu.Item as={Link} to="/pinit/new">
            <Button className="new-button">PinIt!</Button>
          </Menu.Item>
          <Menu.Item>
            <Button onClick={this.handleClick.bind(this)}>Sign out</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default connect(null, actions)(MenuIn);
