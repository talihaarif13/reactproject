import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

const loginUser = async (email, password) => {
  const user_login = await axios.post("http://localhost:3000/user/login", {
      "email": email,
      "password": password
  });
  return user_login;
}
// worker Saga: will be fired on userLogin actions
function* fetchUser(action) {
   try {
        console.log("action", action);
        const user = yield call(loginUser, action.payload.email, action.payload.password );
        yield put({type: "SET_USER", users: user.data});
   } catch (e) {
      console.log("eroor", e);
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("userLogin", fetchUser);
}

/*
//   Alternatively you may use takeLatest.

//   Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
//   dispatched while a fetch is already pending, that pending fetch is cancelled
//   and only the latest one will be run.
// */
// function* mySaga() {
//   yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
// }

export default mySaga;