import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './reducers/profile-reducer';
import dialogsReducer from './reducers/dialogs-reducer';
import sidebarReducer from './reducers/sidebar-reducer';
import usersReducer from "./reducers/users-reducers";
import authReducer from "./reducers/auth-reducers";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from "./reducers/app-reducers";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;