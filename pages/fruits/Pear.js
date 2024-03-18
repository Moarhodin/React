import React from "react";
import Side from "../../components/Side";

class Pear extends React.Component{
	render(){

		const pearTitle = "PÄRON";
		const pearText = "Päron är starkväxande träd som med tiden blir ganska höga, ca 6 m. Nog finns det sorter som passar i de högre odlingszonerna men det är bra att ge dem ett gynnsamt läge. Sol, väldränerad jord och skydd mot nordliga vindar. Flera av våra päronsorter är helt självfertila medan vissa sorter behöver ett annat päronträd som kompis för att ge stor skörd. Träden kostar 750 kr/st.";

		return(
			<div>
			<div className="bakgrundfarg"/>
			<Side title={pearTitle} text={pearText} /> 
			</div>
		);
	}
}

export default Pear;