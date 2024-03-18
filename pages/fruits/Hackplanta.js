import React from "react";
import Side from "../../components/Side";

class Hackplanta extends React.Component{
render(){

	const hackplantaTitle = "HÄCKPLANTA";
	const hackplantaText = "Beställningsvara som levereras som barrot (utan jord och kruka) i knippe om 10 st.Sätts i vatten upp till ett dygn innan plantering. Säljs under vår (beställ senast 15 maj)samt höst (beställ senast i augusti). Leverans under höst sker när plantorna börjat avmogna (vanligen slutet av september). Plantering kan ske så länge inte marken är frusen.Alla plantor är förgrenade och har angiven höjd vid leverans. Vid vårplantering bör man göra planteringsbeskärning direkt, vid höstplantering görs den våren efter. Vi reserverar oss för slutförsäljning hos leverantör.";
      return(
	     	 <div >
		      <div className="bakgrundfarg"></div>
			<Side title={hackplantaTitle} text={hackplantaText} />
	      	</div>);
      }

}

export default Hackplanta;