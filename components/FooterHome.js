import React from 'react';
import './styles/FramsidaStyle.css';
import Bildspel from './../components/Bildspel';


class FooterHome extends React.Component{
	render(){
		const bilder = [
			"https://imgur.com/MInHapC.jpg",
			"https://imgur.com/yhYLxrF.jpg",
			"https://imgur.com/Sk8mTZx.jpg",
			"https://imgur.com/4znzF9o.jpg",
			"https://imgur.com/1F5fyP5.jpg"
		];

		return (
		<main className="footer-main">
			<Bildspel images={bilder} />

			<div id="infoRuta">
				<h3>INFORMATION</h3>
				<h3>ADRESS: Holmsjön 70</h3>
				<h3>905 96 Umeå</h3>
				<h3>TEL:072-273 35 84</h3>
				<h3>MAIL:info@smultronstaellet.se</h3>
				<a href="https://www.instagram.com/smultronstaellet_i_norr/" target="_blank" class="instagram-link">Besök oss på instagram</a>    
    			</div>		

    			<div id="textRuta">

	    			<h3>Nytt år - nya odlingsmöjligheter!</h3>
	    			<h3>
		    			Första halvan av vintern har bjudit på både
		    			kyla och stora snömängder men vi har
		    			börjat drömma om takdropp och sådder.Vi 
		    			bläddrar bland fröer och krukor för att leta
		    			fram det bästa sortimentet till er. Den 15
		    			april öppnar vi upp butiken igen och 26-28
		    			april är vi med på Nolia trädgårdsmässa,
		    			hoppas vi ses där!
	    			</h3>
    			</div>

    			<div id="videoRuta">
	    			<iframe width="100%" height="100%" src="https://www.youtube.com/embed/CzCXYxhoEMQ?si=OuC-h9S_LIMAZPG1" 
		    			title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; 
		    			encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
	    			</iframe>
    			</div>
    		</main>);

	}
}

      
export default FooterHome;

