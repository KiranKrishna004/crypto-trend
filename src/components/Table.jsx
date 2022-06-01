/** @format */

import Trend from "./Trend";

const Table = () => {
	return (
		<div className='flex justify-center w-full'>
			<div className='col-span-12'>
				<table className='border-2 rounded-full sm:px-4'>
					<thead>
						<tr>
							<th>Name</th>
							<th className='px-7'>Symbol</th>
							<th className='whitespace-nowrap px-7'>MarketCap Rank</th>
							<th className='px-12'>Price (in BTC)</th>
						</tr>
					</thead>
					<tbody>
						<Trend />
					</tbody>
				</table>
			</div>
		</div>
	);
};
export default Table;
