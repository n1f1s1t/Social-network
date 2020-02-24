import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./dialogs-reducer";
import { sidebarReducer } from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";


let redusers = combineReducers({
    profilePage: profileReducer, 
    dialogsPage: messageReducer, 
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;