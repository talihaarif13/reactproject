import axios from 'axios';
import * as actions from '../ActionTypes/actionTypes';

export function userLogin(id, name, email) {
    return {
        type: actions.USER_LOGIN,
        payload: {
            id: id,
            email: email,
            name: name
        }
    };
}

export const getHotels = () => {
    return (dispatch) => {     //nameless functions
        // Return promise with success and failure actions
        return axios.get('http://localhost:3000/hotel/',
            { headers: { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NDEyMTIzMTUsImV4cCI6MTY0MTIzMDMxNX0.-TdIfNMD_R5TsQ0uveltISohc7GpnKJC1MZl_w2r6oU" } })
            .then((user) => {
                console.log(user.data[0].name);
                dispatch({ type: actions.FETCH_HOTELS, payload: user });
            }).catch((err) => {
                console.log("error", err);
            })
    };
}