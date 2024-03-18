import React from "react";
import './styles/SideStyle.css';

class Side extends React.Component {
  render() {
    return (
      <div id="grönRuta">
        <p id="rubrik">{this.props.title}</p> 
        <p id="text">{this.props.text}</p> 
      </div>
    );
  }
}

export default Side;