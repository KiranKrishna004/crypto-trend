/** @format */
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const Fetch = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		axios
			.get("https://api.coingecko.com/api/v3/search/trending")
			.then((response) => {
				dispatch({ type: "GETT", payload: response.data });
			})
			.catch((e) => console.log(e));
	}, []);
};
export default Fetch;
