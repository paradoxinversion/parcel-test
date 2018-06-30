import React from "react";
import photo from "../../images/photo.jpg";
class ImageContainer extends React.Component {
  render() {
    return (
      <div>
        <img src={photo} alt="An image" />
      </div>
    );
  }
}

export default ImageContainer;
