/** @format */

import Trend from "./Trend";

const Table = () => {
	return (
		<div className='flex justify-center sm:w-full xs:w-full'>
			<table className='border-2 rounded-full sm:px-4 table-auto '>
				<thead>
					<tr>
						<th>Name</th>
						<th className='px-7 hidden md:table-cell'>Symbol</th>
						<th className='whitespace-nowrap px-7 hidden md:table-cell'>
							MarketCap Rank
						</th>
						<th className='px-12'>Price (in BTC)</th>
					</tr>
				</thead>
				<tbody>
					<Trend />
				</tbody>
			</table>
		</div>
	);
};
export default Table;
