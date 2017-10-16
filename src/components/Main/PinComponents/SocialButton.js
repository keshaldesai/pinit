import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../../../actions";

class SocialButton extends Component {
  handleClick(pinId, alreadyLiked) {
    const token = localStorage.getItem("token");
    const { route, googleId } = this.props;
    const cb = route => {
      switch (route) {
        case "home":
          return this.props.getAllPins();
        case "profile":
          return this.props.getMyPins(googleId);
        case "user":
          return this.props.getUserPins(googleId);
        default:
          return;
      }
    };
    if (alreadyLiked) {
      this.props.unlikePin(token, pinId).then(() => {
        cb(route);
      });
    } else {
      this.props.likePin(token, pinId).then(() => {
        cb(route);
      });
    }
  }

  render() {
    const { pinId, usersLiked, authenticated, route } = this.props;
    if (!authenticated || route === "new") {
      return (
        <Button
          floated="left"
          color="grey"
          icon="heart"
          label={{
            basic: true,
            color: "grey",
            pointing: "left",
            content: usersLiked.length
          }}
        />
      );
    }
    const alreadyLiked = usersLiked.indexOf(this.props.user.googleId) !== -1;
    const buttonColor = alreadyLiked ? "red" : "grey";
    return (
      <Button
        floated="left"
        color={buttonColor}
        icon="heart"
        label={{
          basic: true,
          color: buttonColor,
          pointing: "left",
          content: usersLiked.length
        }}
        onClick={this.handleClick.bind(this, pinId, alreadyLiked)}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, actions)(SocialButton);
