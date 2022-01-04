import * as actions from '../ActionTypes/actionTypes';
import service from '../../Services/axiosService';

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
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NDEyODQ0NjIsImV4cCI6MTY0MTMwMjQ2Mn0.q0y70yGLx_FHx5tAockhrMHq2JxPyMMXGOLusQe_FEA";

export const getHotels = () => async (dispatch) => {
    try {
        const hotels = await service.get("hotel/", token, "");
        console.log("hotel data", hotels);
        dispatch({ type: actions.FETCH_HOTELS, payload: hotels});
    } catch (error) {
        console.log(error);
    }
};
// export const getHotels = () => {
//     return (dispatch) => {     //nameless functions
//         // Return promise with success and failure actions

//         return axios.get('http://localhost:3000/hotel/',
//             { headers: { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NDEyNjcyNzUsImV4cCI6MTY0MTI4NTI3NX0.bAl20HimDv4fV7u4piGYRZU22XOtoeAWqshQFNvXklk" } })
//             .then((user) => {
//                 console.log(user.data[0].name);
//                 dispatch({ type: actions.FETCH_HOTELS, payload: user });
//             }).catch((err) => {
//                 console.log("error", err);
//             })
//     };
// }