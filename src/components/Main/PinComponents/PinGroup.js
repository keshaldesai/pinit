import React, { Component } from "react";
import { Message, Container } from "semantic-ui-react";
import Masonry from "react-masonry-component";
import PinCard from "./PinCard";

const masonryOptions = {
  transitionDuration: 200,
  gutter: 16,
  fitWidth: true
};

class PinGroup extends Component {
  renderPins() {
    const { pins } = this.props;
    const keys = Object.keys(pins);
    if (keys.length === 0) {
      return (
        <Container>
          <Message
            icon="frown"
            header="No pins found."
            content="Make your first one today!"
          />
        </Container>
      );
    }
    return pins.map(pin => {
      const { _id, url, title, googlePhoto, usersLiked, googleId } = pin;
      return (
        <PinCard
          key={_id}
          pinId={_id}
          className="pin-item"
          url={url}
          googlePhoto={googlePhoto}
          googleId={googleId}
          title={title}
          usersLiked={usersLiked}
          route={this.props.route}
        />
      );
    });
  }
  render() {
    return (
      <Masonry options={masonryOptions} className="pin-group">
        {this.renderPins()}
      </Masonry>
    );
  }
}

export default PinGroup;
