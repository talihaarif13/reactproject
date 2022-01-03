import { createStore, applyMiddleware, combineReducers } from "redux";
import reducer from "./Reducers/userlogin";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import fetchHotels from "./Reducers/fetchHotels";


const store = createStore(combineReducers({
    hotels : fetchHotels,
    users: reducer
    }), 
    composeWithDevTools(applyMiddleware(thunk))
);
export default store;
