import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";
import SocialButton from "./SocialButton";
import DeleteButton from "./DeleteButton";
import ShareButton from "./ShareButton";

class PinCard extends Component {
  handleError(e) {
    e.target.src =
      "http://xpenology.org/wp-content/themes/qaengine/img/default-thumbnail.jpg";
  }

  render() {
    const {
      googlePhoto,
      googleId,
      title,
      usersLiked,
      pinId,
      route,
      url
    } = this.props;
    const aUrl = document.createElement("a");
    aUrl.href = url;

    return (
      <Card raised centered>
        <Image
          src={url}
          href={url}
          target="_blank"
          onError={this.handleError.bind(this)}
        />
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src={googlePhoto}
            as={Link}
            to={`/user/${googleId}`}
          />
          <Card.Header>{title}</Card.Header>
          <Card.Meta>{aUrl.hostname}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <SocialButton
            pinId={pinId}
            usersLiked={usersLiked}
            route={route}
            googleId={googleId}
          />
          <ShareButton url={url} />
        </Card.Content>
        <DeleteButton route={route} pinId={pinId} />
      </Card>
    );
  }
}

export default PinCard;
