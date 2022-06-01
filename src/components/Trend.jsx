/** @format */
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

const Trend = () => {
	const dispatch = useDispatch();
	const trend = useSelector((state) => state.trend.trend.coins);
	return (
		<>
			{trend.map(({ item }, index) => {
				return (
					<tr key={index} className='w-full border-b-2'>
						<td className='w-full items-center py-3'>
							<div className='flex justify-items-start ml-5'>
								<img className='object-cover w-16 h-16' src={item.large} />
								<div className='justify-items-center pl-5 pt-4'>
									{item.name}
								</div>
							</div>
						</td>
						<td className='text-center'>{item.symbol}</td>
						<td className='text-center'>{item.market_cap_rank}</td>
						<td className='text-center'>{item.price_btc}</td>
						<td>
							<li key={index} className='list-none mx-4 whitespace-nowrap'>
								<Link to={`/${item.id}`}>
									<button
										className='border-2 px-2 rounded-lg'
										onClick={() => {
											axios
												.get(
													`https://api.coingecko.com/api/v3/coins/${item.id}`
												)
												.then((response) => {
													dispatch({ type: "GETC", payload: response.data });
												})
												.catch((e) => console.log(e));
										}}>
										Read More
									</button>
								</Link>
							</li>
						</td>
					</tr>
				);
			})}
		</>
	);
};
export default Trend;
