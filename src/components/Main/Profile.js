import React, { Component } from "react";
import { getMyPins } from "../../actions";
import { connect } from "react-redux";
import PinGroup from "./PinComponents/PinGroup";
import { Loader } from "semantic-ui-react";

class Profile extends Component {
  componentWillMount() {
    this.props.getMyPins(this.props.user.googleId);
  }

  renderPage() {
    if (this.props.gettingMyPins) {
      return <Loader active />;
    }
    return <PinGroup pins={this.props.pins} route="profile" />;
  }

  render() {
    return <div className="profile">{this.renderPage()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    pins: state.pins.myPins,
    gettingMyPins: state.pins.gettingMyPins
  };
}

export default connect(mapStateToProps, { getMyPins })(Profile);
