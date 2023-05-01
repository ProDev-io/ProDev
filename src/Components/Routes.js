import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Lost from "./Lost";

function Paths(){
	return (
		<Routes>
			<Route exact path="/"  element={<Home/>} />
			<Route exact path="*" element={<Lost />}/>
		</Routes>
	)
};


export default Paths;