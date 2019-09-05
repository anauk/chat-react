import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import usersReducer from "./users-reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogReducer,
  usersPage: usersReducer
});

const store = createStore(reducers);
window.stare = store;
export default store;
