import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./Profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducers";
import AuthReducer from "./auth-reducer";
import { thunk } from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    dialog: dialogsReducer,
    usersPage: usersReducer,
    authUsers: AuthReducer
})

let store = createStore(reducers, applyMiddleware(thunk))

export default store