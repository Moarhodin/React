import React from "react";
import Side from "../components/Side";

class OmOss extends React.Component{
	render(){

		const omOssTitle = "OM OSS";
		const omOssText = "Smultronstället handelsträdgård och kafé ligger i byn Holmsjön utanför Umeå. I en skogsbacke med badstranden runt hörnet kan du botanisera bland växter, kolla in trädgårdsbutiken, fika eller bara vila en stund i hängmattan. Barnen har en egen koja i skogsbrynet och brukar uppskatta att springa runt längst dom slingriga stigarna. Vattenskålar finns till våra fyrbenta vänner.";

		return(

			<main>
				<div className="bakgrundfarg"/>
				<Side title={omOssTitle} text={omOssText} /> 
				
				<div className="mail-container">
					<div id="mailPopup" className="mail">
			    			<form action="mailto:moarhodin@hotmail.com" method="post" enctype="text/plain">
							<label for="namn">Namn:</label>
							<input type="text" id="namn" name="namn" required/>
							<label for="e-post">E-post:</label>
							<input type="email" id="e-post" name="e-post" required/>
							<label for="meddelande">Meddelande:</label>
							<textarea id="meddelande" name="meddelande" rows="4" required></textarea>
							<input type="submit" value="Skicka"/>
			    			</form>
					</div>
				</div>
			</main>
		);
	}
}

export default OmOss;