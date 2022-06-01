/** @format */

import { combineReducers } from "redux";
import coinReducer from "./coinReducer";
import trendReducer from "./trendReducer";

const allReducer = combineReducers({ trend: trendReducer, coin: coinReducer });
export default allReducer;
