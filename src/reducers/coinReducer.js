/** @format */

const initialState = { coin: [] };

const coinReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GETC":
			return { coin: action.payload };
		default:
			return state;
	}
};
export default coinReducer;
