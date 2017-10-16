import React, { Component } from "react";
import { getUserPins } from "../../actions";
import { connect } from "react-redux";
import PinGroup from "./PinComponents/PinGroup";
import { Loader } from "semantic-ui-react";

class UserPage extends Component {
  componentWillMount() {
    this.props.getUserPins(this.props.match.params.googleId);
  }

  renderPage() {
    if (this.props.gettingUserPins) {
      return <Loader active />;
    }
    return <PinGroup pins={this.props.pins} route="user" />;
  }
  render() {
    return <div className="user-page">{this.renderPage()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    pins: state.pins.oneUser,
    gettingUserPins: state.pins.gettingUserPins
  };
}

export default connect(mapStateToProps, { getUserPins })(UserPage);
