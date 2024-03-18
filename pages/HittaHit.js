import React from "react";
import Side from "../components/Side";


class HittaHit extends React.Component{
	render(){

		const hittaHitTitle = "HITTA HIT";
		const hittaHitText = "Smultronstället ligger vid sjön Holmsjön, mittemellan Umeå och Holmsund. Du kommer hit från Umeå via Strömpilen/Gimonäs eller via Ålidhem/Tomtebo.";

		return(<main>

			<Side title={hittaHitTitle} text={hittaHitText} /> 

			<img id="Karta" src='https://imgur.com/L01Z2yN.jpg' alt='Karta'/>
			<img id="Fordon" src='https://imgur.com/v9KUzQh.jpg' alt='Transportmedel'/>

			<h6 id="TextBuss"> Buss nr 123 och 124 från Umeå centrum (Vasaplan) mot Holmsund/Obbola. Kliv av på hållplats "Vägskäl Yttertavle". Sedan 15 minuters promenad mot Yttertavle.</h6>
			<h6 id="TextBil"> Från Umeå, kör Blå Vägen (Holmsundsvägen) mot Holmsund. Efter ca 6 km, sväng av vänster vid skylten Yttertavle 4. Efter byaskylten Holmsjön så ligger Smultronstället på vänster sida.</h6>
			<h6 id="TextCykel">Från Umeå, ta gärna den fina och krokiga vägen via Yttertavle! Smultronstället ligger precis efter sjön.</h6>

		</main>);
	}
}
export default HittaHit;