import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from "redux-thunk"

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.stare = store;
export default store;
