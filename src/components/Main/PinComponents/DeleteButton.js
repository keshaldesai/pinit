import React, { Component } from "react";
import { Button, Card } from "semantic-ui-react";
import { deletePin, getMyPins } from "../../../actions";
import { connect } from "react-redux";

class DeleteButton extends Component {
  handleDelete(pinId) {
    const token = localStorage.getItem("token");
    this.props.deletePin(token, pinId).then(() => {
      this.props.getMyPins(this.props.user.googleId);
    });
  }

  render() {
    const { pinId, route } = this.props;
    if (route === "profile") {
      return (
        <Card.Content extra>
          <Button
            negative
            fluid
            size="tiny"
            onClick={this.handleDelete.bind(this, pinId)}
          >
            Delete
          </Button>
        </Card.Content>
      );
    }
    return <span />;
  }
}

function mapStateToProps(state) {
  return { user: state.auth.user };
}

export default connect(mapStateToProps, { deletePin, getMyPins })(DeleteButton);
