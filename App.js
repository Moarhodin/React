import Home from "./pages/Home";
import OmOss from "./pages/OmOss";
import Sortiment from "./pages/Sortiment";
import HittaHit from "./pages/HittaHit";

import Apple from "./pages/fruits/Apple";
import Pear from "./pages/fruits/Pear";
import Plommon from "./pages/fruits/Plommon";
import Hackplanta from "./pages/fruits/Hackplanta";
import Krikon from "./pages/fruits/Krikon";
import Korsbar from "./pages/fruits/Korsbar";

import MainContainer from "./components/MainContainer";
import Header from "./components/Header";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './App.css';

function App() {
  return (
    
	<Router> 
		<MainContainer>
			<Header/>
				
			<Routes>
				<Route exact path="/" element={<Home />}/>
				<Route path="/omOss" element={<OmOss />}/>
				<Route path="/sortiment" element={<Sortiment />}/>
				<Route path="/hittaHit"element={<HittaHit />}/>
				<Route path="/korsbar" element={<Korsbar/>}/>
				<Route path="/apple" element={<Apple />}/>
				<Route path="/pear" element={<Pear />}/>
				<Route path="/plommon" element={<Plommon />}/>
				<Route path="/hackplanta" element={<Hackplanta/>}/>
				<Route path="/krikon" element={<Krikon/>}/>
				
			</Routes>
			
		</MainContainer>
	</Router>
    
  );
}

export default App;
