import * as actions from '../ActionTypes/actionTypes';

export default function reducer(state = [], action) {
    switch (action.type){
        case actions.USER_LOGIN: 
            return[
                ...state, 
                {
                    id: action.payload.id,
                    email: action.payload.email,
                    name: action.payload.name
                }
            ];
        case actions.USER_LOGOUT:
            return [];
        default:
            return state;
    }
}
