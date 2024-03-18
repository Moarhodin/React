
import React from 'react';
import FooterHome from '../components/FooterHome';

class Home extends React.Component{

	render(){

		return(
		<main>
			<div className="container">
			
			<img id="bakgrundsbild" src='https://imgur.com/VKoOnTH.jpg' alt='Smultronstället bild'/>

			<div id="rubrikBakgrund">
		
				<h1>SMULTRONSTÄLLET</h1>
				<h2>HANDELSTRÄGÅRD & KAFE</h2>
			</div> 

        		<FooterHome/>

			</div>
		</main>);
	}
}

export default Home;