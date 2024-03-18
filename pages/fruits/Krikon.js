import React from "react";
import Side from "../../components/Side";

class Krikon extends React.Component{
	render(){

		const krikonTitle = "KRIKON";
		const krikonText = "Krikon (Prunus domestica ssp. insititia) är en underart, med mindre träd och torniga grenar. Fruktköttet släpper inte lika lätt från kärnan men de är lika goda som plommon (Prunus domestica)."

		return(
		<main>
			<div>
				<div className="bakgrundfarg"/>
				
				<Side title={krikonTitle} text={krikonText} /> 
	

    				<table>
        				<tr>
            				<th>Namn</th>
            				<th>Beskrivning</th>
            				<th>Art</th>
            				<th>Zon</th>
        			</tr>

       				<tr>
            				<td>Krikon</td>
            				<td>Över 200 år gammal sort. Liten, blålila, rund frukt. Utmärkt delikatessfrukt som passar även till sylt. Självfertil.</td>
            				<td>Prunus domestica ssp. insititia</td>
            				<td>Zon 6</td>
        			</tr>

        			<tr>
            				<td>GULKRIKON 'VOITTO'</td>
            				<td>Ovanliga, gulorangea krikon med god och aromatisk smak. Rotäkta. Höjd 3 m. Självfertil.</td>
            				<td>Prunus domestica ssp. insititia</td>
            				<td>Zon 5-6</td>
        			</tr>

        			<tr>
            				<td>GULKRIKON 'WILMA'</td>
            				<td>Ovanliga, gulorangea krikon med god och aromatisk smak. Rotäkta. Höjd 3 m. Självfertil.</td>
            				<td>Prunus domestica ssp. insititia</td>
            				<td>Zon 6</td>
        			</tr>	

        			<tr>
           				<td>HIMBERGS BLÅKRIKON</td>
            				<td>Snabbväxande och rikbärande lokalsort från landskapet Egentliga Finland. Frukterna är aningen större än Sinikka och mycket saftiga och aromatiska. Frisk sort. Självfertil.</td>
            				<td>Prunus domestica ssp. insititia</td>
            				<td>Zon 5</td>
        			</tr>

        			<tr>
            				<td>SILVAST</td>
            				<td>Mycket vinterhärdig lokalsort från Jeppo i Österbotten. Frukten är söt,
					 blålila och mognar tidigt. Tidig blomning.
					</td>
            				<td>Prunus domestica ssp. insititia</td>
            				<td>Zon 6</td>
        			</tr>
    			</table>
		</div>
	</main>);
	}
}

export default Krikon;