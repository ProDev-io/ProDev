import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Footer from "./Footer";

function Paths(){
	return (
		<Routes>
			<Route exact path="/"  element={<Home/>} />
			<Route exact path="*" element={<Footer />}/>
		</Routes>
	)
};


export default Paths;