/** @format */
import { useSelector } from "react-redux";

const DeetsDisplay = () => {
	const coin = useSelector((state) => state.coin.coin);
	console.log("coin: ", coin);
	return (
		<>
			{coin.length === 0 ? (
				<></>
			) : (
				<div className='my-12 mx-24 lg:mx-44 h-1/2 flex flex-col justify-center items-center '>
					<img src={coin.image.large} />
					<div className='flex flex-wrap justify-center mt-4 font-bold text-3xl space-x-2'>
						<p>{coin.name}</p>
						<p className='font-light text-2xl'>
							{coin.market_data.current_price.btc} (in BTC)
						</p>
					</div>
					<div className='flex space-x-1 py-3 text-sm'>
						{coin.categories.map((item, index) => {
							console.log(item);
							return (
								<div key={index} className='whitespace-nowrap'>
									{item !== null ? (
										<div className='border rounded-full px-2'>{item}</div>
									) : (
										<></>
									)}
								</div>
							);
						})}
					</div>

					<button>
						{coin.links.homepage.map((item, index) => {
							return (
								<a key={index} href={`${item}`} target='_blank'>
									<div>
										{item.length !== 0 ? (
											<div className='text-sm border rounded-full px-2 mb-2'>
												{item}
											</div>
										) : (
											<></>
										)}
									</div>
								</a>
							);
						})}
					</button>
					<div className='items-start border rounded-full px-2 mb-2'>
						Twitter Followers: {coin.community_data.twitter_followers}
					</div>
					<div className='text-lg px-5 my-7'>{coin.description.en}</div>
				</div>
			)}
		</>
	);
};
export default DeetsDisplay;
