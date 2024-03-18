import React, { useState } from 'react';
import './styles/FramsidaStyle.css';

function Bildspel({ images }) {
	const [nuvarande, nuvarandeIndex] = useState(0);
      
	const bytBild = () => {
	  nuvarandeIndex(föregåendeIndex => (föregåendeIndex + 1) % images.length);
	};
      
	return (
	  	<div className="bildspelContainer">
	    		{images.map((image, index) => (
	     			<img
					key={index}
					src={image}
					alt={"Bild ${index + 1}"}
					className={`bildspelBild ${index === nuvarande && 'active'}`}
					onClick={bytBild}
	      			/>
	    		))}
	  	</div>
	);
}
      
export default Bildspel;