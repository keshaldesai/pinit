import React, { Component } from "react";
import { getAllPins } from "../../actions";
import { connect } from "react-redux";
import PinGroup from "./PinComponents/PinGroup";
import { Loader } from "semantic-ui-react";

class Home extends Component {
  componentWillMount() {
    this.props.getAllPins();
  }

  renderPage() {
    if (this.props.gettingAllPins) {
      return <Loader active />;
    }
    return <PinGroup pins={this.props.pins} route="home" />;
  }

  render() {
    return <div className="home">{this.renderPage()}</div>;
  }
}
function mapStateToProps(state) {
  return {
    pins: state.pins.all,
    gettingAllPins: state.pins.gettingAllPins
  };
}

export default connect(mapStateToProps, { getAllPins })(Home);
