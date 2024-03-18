import React from "react";
import './styles/HeaderStyle.css';

import {NavLink, Link} from "react-router-dom";

class Header extends React.Component {
	
	toggleMenu = () => {
	  const submenu = document.getElementById("submenu");
	  if (submenu.style.display === "none") {
	    submenu.style.display = "flex";
	  } else {
	    submenu.style.display = "none";
	  }
	};
      
	visaSortiment = () => {
	  const underkategorier = document.getElementById("sorter");
	  underkategorier.style.display = "block";
	};
      
	gomSortiment = () => {
	  const underkategorier = document.getElementById("sorter");
	  underkategorier.style.display = "none";
	};
      
	render() {
	  return (
	    <header>
	      <div id="SvartRektangel">
		<p className="sökMenyText">SÖK</p>
      		<p className="sökMenyText" onClick={this.toggleMenu}>MENY</p>
      
		<nav className="submenu" id="submenu" style={{ display: "none" }}>
		  <ul>
		    <li><a href="#">ÖPPETTIDER</a></li>
		    <li><NavLink to="/OmOss">OM OSS</NavLink></li>
		    <li><NavLink to="/HittaHit">HITTA HIT</NavLink></li>
		    <li onMouseOver={this.visaSortiment} onMouseOut={this.gomSortiment}>
		      <NavLink to="/Sortiment">SORTIMENT</NavLink>
		      <ul id="sorter" style={{ display: "none" }}>
			<li><NavLink to="/Apple">Äpplen</NavLink></li>
			<li><NavLink to="/Pear">Päron</NavLink></li>
			<li><NavLink to="/Plommon">Plommon</NavLink></li>
			<li><NavLink to="/Korsbar">Körsbär</NavLink></li>
			<li><NavLink to="/Krikon">Krikon</NavLink></li>
			<li><NavLink to="/Hackplanta">Häckplanta</NavLink></li>
		      </ul>
		    </li>
		    <li><a href="#">TJÄNSTER</a></li>
		    <li><a href="#">PRESENTKORT</a></li>
		  </ul>
		</nav>
      
		<div id="grönaRutanHem">
		  <NavLink to="/">
		    <p id="hemText">HEM</p>
		  </NavLink>
		</div>
	      </div>
	    </header>
	  );
	}
      }
      
      export default Header;

