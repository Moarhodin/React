import React from "react";
import Side from "../../components/Side";
import KorsbarSort from "../../components/KorsbarSort";

class Korsbar extends React.Component{

	render(){

		const korsbarTitle = "KÖRSBÄR";
		const korsbarText = "Körsbärsträd trivs bäst i sol och väldränerad jord, gärna i öst- eller västläge med skydd mot nordanvind. Beskäres mycket sparsamt, endast vid behov i JAS. I Sverige odlar vi framförallt två arter av körsbär, surkörsbär (Prunus cerasus) och sötkörsbär (Prunus avium). Sötkörsbär är självsterila och behöver alltså ett kompisträd av annat sortnamn för att få bär. De blir stora, höga träd och är mindre härdiga än surkörsbär. Det finns sortnamn av surkörsbär som har mycket söta och goda bär. De delas upp i moreller (med helt mörka bär) och amareller (med rött skal och ljust fruktkött). Surkörsbär är oftast självfertila."
	

		return(
		<main>			
			<Side title={korsbarTitle} text={korsbarText} /> 
		
			<div id="bakgrundfarg2"/>
			
			<KorsbarSort
  				sortName="Carmine Jewel Prunus cerasus"
  				imageUrl="https://imgur.com/kBMXIzS.jpg"
  				infoBoxId="InfoBox1"
  				infoText="Buskkörsbär. Mycket goda, sötsyrliga bär med ton av mandel. Mognar tidigt.
				 		Självfertil. Finns både som buske och som litet stamträd. Zon 6."
  				price="480kr"
  				top="15vh"
  				left="35%"
			/>

			<KorsbarSort
  				sortName="Chokladkörsbär Prunus cerasus"
  				imageUrl="https://imgur.com/ivnhtot.jpg"
  				infoBoxId="InfoBox2"
  				infoText="Buskkörsbär. Litet, mycket härdigt, kanadensiskt buskkörsbär med goda bär. Rotäkta. 1,8m. Finns både som buske och som litet stamträd. Självfertil. Zon 6."
				price="480kr"
				top="15vh"
  				left="50%"
			/>

			<KorsbarSort
  				sortName="Snövit Prunus tomentosa"
  				imageUrl="https://imgur.com/1f0Twsr.jpg"
  				infoBoxId="InfoBox3"
  				infoText="Buskkörsbär. Vita(!) söta körsbär som fåglarna ej hittar. Rotäkta. 2-2,5m. Finns både som buske och som litet stamträd. Zon 5-6. "
				price="480kr"
				top="15vh"
  				left="65%"
			/>

			<KorsbarSort
  				sortName="HUVIMAJA Prunus cerasus"
  				imageUrl="https://imgur.com/fjUH4hY.jpg"
  				infoBoxId="InfoBox4"
  				infoText="Surkörsbär. Finskt körsbär av amarelltyp. Stora, söta bär. Ger fort skörd. Zon 5-6."	
				price="750kr"
				top="15vh"
  				left="80%"
			/>

			<KorsbarSort
  				sortName="Sikkola Prunus cerasus"
  				imageUrl="https://imgur.com/PpUI6zR.jpg"
  				infoBoxId="InfoBox5"
  				infoText="Surkörsbär. Små, relativt söta med ljust fruktkött. Zon 6."	
				price="750kr"
				top="45vh"
  				left="35%"
			/>

			<KorsbarSort
  				sortName="Hultsjö svarta Prunus avium"
  				imageUrl="https://imgur.com/zzVtWIR.jpg"
  				infoBoxId="InfoBox6"
  				infoText="Sötkörsbär från Småland. Angenämt söta bär med viss syra. Passar som färskfrukt. Mognar tidigt. Starkväxande. Samplanteras med annat sötkörsbär för att ge skörd. Zon 4-5."	
				price="750kr"
				top="45vh"
  				left="50%"
			/>

			<KorsbarSort
  				sortName="Iput Prunus avium"
  				imageUrl="https://imgur.com/A6MoS1U.jpg"
  				infoBoxId="InfoBox7"
  				infoText="Sötkörsbär. Frukten är mycket stor med mörkrött, nästan svart skal. Fruktköttet är rött, saftigt och sött. Mycket god frukt för färskkonsumtion. Delvis självfertil sort. Zon 4-5."
				price="750kr"
				top="45vh"
  				left="65%"
			/>

			<KorsbarSort
  				sortName="Leningradblack Prunus avium"
  				imageUrl="https://imgur.com/oVDvdLs.jpg"
  				infoBoxId="InfoBox8"
  				infoText="Sötkörsbär. Vacker, nästan svart frukt som är god att äta men även passande i hushållet. Stort träd som ger riklig skörd. Samplanteras med annan sötkörsbärssort. Vinterhärdig. Zon 4-5."
				price="750kr"
				top="45vh"
  				left="80%"
			/>

			<KorsbarSort
  				sortName="Lönneberga Prunus avium"
  				imageUrl="https://imgur.com/zzVtWIR.jpg"
  				infoBoxId="InfoBox9"
  				infoText="Sötkörsbär från Småland. Goda bär med endast liten syrlighet. Starkväxande sort. Samplanteras med annat sötkörsbär. Zon 4."	
				price="750kr"
				top="75vh"
  				left="35%"
			/>

			<KorsbarSort
  				sortName="Vytenu Geltonoi Prunus avium"
  				imageUrl="https://imgur.com/nJShALZ.jpg"
  				infoBoxId="InfoBox10"
  				infoText="Sötkörsbär. Vackert lysande, gula frukter som mognar i slutet av juli. Frukten är söt, nästan som karameller, utan nämnvärd syra. Starkväxande sort som kräver beskärning för att få bra form. Ej självfertil. Zon 4-5."
				price="750kr"
				top="75vh"
  				left="50%"
			/>

			<KorsbarSort
  				sortName="Zafir Prunus avium"
  				imageUrl="https://imgur.com/54JkPCH.jpg"
  				infoBoxId="InfoBox11"
  				infoText="Sötkörsbär. Härstammar från småländska höglandet. Mörkröda delikatessbär med liten kärna. Medeltidig sort som snabbt ger stora skördar. Svagväxande körsbärsträd. Samplanteras med annat sötkörsbär. 4-5."
				price="750kr"
				top="75vh"
  				left="65%"
			/>	

			<KorsbarSort
  				sortName="Rauhala Prunus cerasus"
  				imageUrl="https://imgur.com/Iozk8Fd.jpg"
  				infoBoxId="InfoBox12"
  				infoText="Surkörsbär. Härdig körsbärssort av morelltyp. Frukterna är mörkröda och syrliga. Självfertil. Zon 5."
				price="750kr"
				top="75vh"
  				left="80%"
			/>

			<KorsbarSort
  				sortName="Lettisk Låg Prunus cerasus"
  				imageUrl="https://imgur.com/54JkPCH.jpg"
  				infoBoxId="InfoBox13"
  				infoText="Buskkörsbär. Vackra, mörkröda bär som är goda och söta. Mognar två veckor tidigare än vanliga körsbär. Superhärdig sort. Rotäkta och självfertil. Finns som buske. 2,5-3m. Zon 6-7."
				price="480kr"
				top="105vh"
  				left="35%"
			/>

			<KorsbarSort
  				sortName="Vytrnu Geltonoi Prunus avium"
  				imageUrl="https://imgur.com/oVDvdLs.jpg"
  				infoBoxId="InfoBox14"
  				infoText="Sötkörsbär. Goda mörkröda frukter. Behöver samplanteras med annat sötkörsbär. Zon 4-5."
				price="750kr"
				top="105vh"
  				left="50%"
			/>
	
		</main>);
	}
}

export default Korsbar;