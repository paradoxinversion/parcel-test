import React from "react";
import ImageContainer from "./Components/ImageContainer/ImageContainer.js";
class App extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <p> Hello {this.props.name}</p>
        <ImageContainer />
      </div>
    );
  }
}

export default App;
