import React from "react";
import SideBlack from "../components/SideBlack";
import Frukt from "../components/Frukt";

class Sortiment extends React.Component {
  	render() {
    		const sortimentTitle = "SORTIMENT";
    		const sortimentText ="Här i Sortiment 2023 kan du kika inför ditt besök hos oss. Längre ner på denna sida finns även beskrivningar av våra fruktträdssorter samt häckplantor. Observera att vi inte kan hålla aktuell lagerstatus under säsongen så om du är ute efter någon särskild sort är det säkrast att maila eller ringa oss innan ditt besök. Vi har många sorters växter men tyvärr inget stort lager, därför krävs det att du förbeställer större mängder och häckplant. Om växten du vill ha finns i Blomqvist Plantskolas sortiment men ej hos oss så tar vi hem dessa om du förbeställer. När vi meddelat dig att växterna finns att hämta är de reserverade för dig i 14 dagar och betalas vid uthämtning. Vi skickar inga växter utan all försäljning sker på Smultronstället i Holmsjön.";

    		return (
      		<main>
       			 <div className="bakgrundfarg" />

        		<SideBlack title={sortimentTitle} text={sortimentText} />

        		<Frukt
         		 	namn="ÄPPLEN"
          			bildUrl="https://imgur.com/PZD9bmY.jpg"
          			path="/Apple"
				top="15%"
				left="35%"
        		/>
        		<Frukt
          			namn="PÄRON"
          			bildUrl="https://imgur.com/MG32WCs.jpg"
          			path="/Pear"
				top="15%"
				left="55%"
        		/>
        		<Frukt
          			namn="PLOMMON"
          			bildUrl="https://imgur.com/bW3gRQS.jpg"
          			path="/Plommon"
				top="15%"
				left="75%"
        		/>
        		<Frukt
          			namn="KÖRSBÄR"
          			bildUrl="https://imgur.com/kBMXIzS.jpg"
          			path="/Korsbar"
				top="55%"
				left="35%"
        		/>
        		<Frukt
          			namn="KRIKON"
          			bildUrl="https://imgur.com/H48DAGm.jpg"
          			path="/Krikon"
				top="55%"
				left="55%"	
        		/>
        		<Frukt
          			namn="HÄCKPLANTA"
          			bildUrl="https://imgur.com/wyufSIZ.jpg"
          			path="/Hackplanta"
				top="55%"
				left="75%"
        		/>
      		</main>);
  	}
}

export default Sortiment;