import React from "react";
import Side from "../../components/Side";


class Apple extends React.Component{
render(){

	const appleTitle = "ÄPPLE";
  	const appleText = "Alla våra äpplesorter är ympade på den härdigaste grundstammen, Antonovka. Trädets storlek avgörs av både sortnamn och grundstam och dessa träd blir med tiden stora, minst 4-5 m. De trivs i sol till lätt skugga och väldränerad humusrik jord. Äpplen är självsterila vilket gör att det krävs minst två sorter i närheten av varandra för att få frukt. Alla sorter i vårt sortiment är kompatibla med varandra. Våra träd är mellan 2-4 år gamla och funkar fint att få med i bilen. Äppelträden kostar 650 kr/st.";

	return(
		<div >
			<div className="bakgrundfarg"></div>
      			<Side title={appleTitle} text={appleText} /> 
	
		</div>);
	}
}

export default Apple;