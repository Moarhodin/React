import React from "react";
import './styles/SideStyle.css';

class SideBlack extends React.Component {
  render() {
    return (
      <div id="svartRuta">
        <p id="rubrik">{this.props.title}</p> 
        <p id="text">{this.props.text}</p> 
      </div>
    );
  }
}

export default SideBlack;