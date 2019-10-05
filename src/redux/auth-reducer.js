import {authApi} from "../api/api";
import { stopSubmit } from "redux-form"

const SET_USER_DATA = 'samuray/auth/SET_USER_DATA';


const initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});
export const getAuthUserData = () => (dispatch) => {
  authApi()
    .then(response => {
      if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
      }
    })
}
export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await login(email, password, rememberMe)
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
      } else {
        let message = response.data.messages.length>0?response.data.messages[0]:'Some error'
        let actions = stopSubmit('login', {_error: message});
        dispatch(actions)
      }
}
export const logout = () => (dispatch) => {
  logout()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null,null,false))
      }
    })
}

export default authReducer