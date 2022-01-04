import * as actions from '../ActionTypes/actionTypes';
export default function fetchHotels(state = [], action) {
    switch (action.type){
        case actions.FETCH_HOTELS: 
            return[
                ...state, 
                {
                    id: action.payload.data[0].id,
                    picture: action.payload.data[0].picture,
                    name: action.payload.data[0].name,
                }
            ];
        default:
            return state;
    }
}
