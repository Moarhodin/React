import React from "react";
import './styles/KorsbarSortStyle.css';

class KorsbarSort extends React.Component {
  	
  	showInfo = (infoBoxId) => {
    		const selectedInfoBox = document.getElementById(infoBoxId);
    		selectedInfoBox.style.display = 'flex';
  	}

  	closeInfo = (infoBoxId) => {
    		const selectedInfoBox = document.getElementById(infoBoxId);
   		 selectedInfoBox.style.display = 'none';
  	}

  	render() {
   		const { sortName, imageUrl, infoBoxId, infoText, price, top, left } = this.props;

    		return (
      			<div className="bakgrund" style={{ top: top, left: left }}>
        			<p className="rubrikRuta">{sortName}</p>
        			<img className="boxImage" src={imageUrl} alt="Exempelbild" />

        			<div className="info" onClick={() => this.showInfo(infoBoxId)}>
          				<p className="textRuta">INFO</p>
        			</div>

        			<div id={infoBoxId} className="InfoBox">
          				<div className="closeButton" onClick={() => this.closeInfo(infoBoxId)}>x</div>
          				<p className="infoText">{infoText}</p>
        			</div>

        			<div className="pris">
          				<p className="textRuta">{price}</p>
        			</div>
      			</div>
    		);
  	}
}

export default KorsbarSort;