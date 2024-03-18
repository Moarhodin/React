import React from "react";
import Side from "../../components/Side";

class Plommon extends React.Component{
	render(){

		const plommonTitle = "PLOMMON";
		const plommonText = "Vill ha sol till halvskugga och klarar både sandig och lerig jord. De olika sortnamnen varierar i växtsätt och storlek. De flesta sorter är självfertila. Körsbärsplommon (Prunus cerasifera) är ett litet träd med vacker blom. Måste samplanteras med annat körsbärsplommon för att få den goda frukten. Samtliga plommonarter beskäres mycket varsamt och endast i JAS. Plommonträden kostar 750 kr/st.";

		return(
			<div>
				<div className="bakgrundfarg"/>
				<Side title={plommonTitle} text={plommonText} /> 
			</div>
		);
	}
}

export default Plommon;