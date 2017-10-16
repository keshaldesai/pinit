import React, { Component } from "react";
import { connect } from "react-redux";
import MenuIn from "./MenuIn";
import MenuOut from "./MenuOut"; /*  */

class Header extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <div className="header">{authenticated ? <MenuIn /> : <MenuOut />}</div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
