/** @format */

import Fetch from "./components/Fetch";
import Home from "./components/Home";
import DeetsDisplay from "./components/DeetsDisplay";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const App = () => {
	Fetch();
	return (
		<Router>
			<Routes>
				<Route path='/:id' element={<DeetsDisplay />} />
				<Route path='/' element={<Home />} />
			</Routes>
		</Router>
	);
};

export default App;
