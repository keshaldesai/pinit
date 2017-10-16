import React from "react";
import { Button } from "semantic-ui-react";

const ShareButton = ({ url }) => {
  const gShare = encodedUrl => {
    window.open(
      encodedUrl,
      "",
      "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600"
    );
    return false;
  };
  return (
    <Button
      floated="right"
      color="green"
      content="Share image"
      icon="share"
      onClick={gShare.bind(
        this,
        `https://plus.google.com/share?url=${encodeURIComponent(url)}`
      )}
    />
  );
};

export default ShareButton;
