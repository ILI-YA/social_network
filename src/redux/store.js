import dialogsReducer from "./reducers/dialogs-reducer";
import profileReducer from "./reducers/profile-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCounts: '15'},
                {id: 2, message: 'Good!', likeCounts: '9'},
                {id: 3, message: 'What are you doing?', likeCounts: '10'},
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Good!'},
            ],
            newDialogText: '',
            dialogs: [
                {id:1, name: 'Illia'},
                {id:2, name: 'Ivan'},
                {id:3, name: 'Sasha'},
            ]
        },
        sidebar: {
            friends: [
                {id:1, name: 'Illia'},
                {id:2, name: 'Ivan'},
                {id:3, name: 'Sasha'},
            ]
        },
        
    },
    
    _callSubscriber() {},
    
    getState() {
        return this._state;
    },
    
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);    
    }
}

export default store;