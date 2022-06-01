/** @format */

const initialState = { trend: [] };

const trendReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GETT":
			return { trend: action.payload };
		default:
			return state;
	}
};
export default trendReducer;
