/** @format */
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import Table from "./Table";
import Intro from "./Intro";

const Home = () => {
	const trend = useSelector((state) => state.trend.trend.coins);
	console.log(trend);
	return (
		<>
			{trend === undefined ? (
				<></>
			) : (
				<div className='min-h-screen'>
					<Navbar />
					<Intro />
					<Table />
				</div>
			)}
		</>
	);
};
export default Home;
