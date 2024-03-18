import "./styles/FruktStyle.css";
import React from "react";
import { NavLink } from "react-router-dom";

class Frukt extends React.Component {

	render(){
		const {  namn, bildUrl, path, top, left } = this.props;
  		return (
   		 	<NavLink to={path}>
      				<div className="bakgrundSort" style={{ top: top, left: left }}>
       	 				<img className="bild" src={bildUrl} alt={namn} />
        				<h5>{namn}</h5>
      				</div>
    			</NavLink>
  		);
	}
};

export default Frukt;