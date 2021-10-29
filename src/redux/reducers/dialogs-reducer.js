const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Good!'},
    ],
    dialogs: [
        {id:1, name: 'Illia'},
        {id:2, name: 'Ivan'},
        {id:3, name: 'Sasha'},
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newText = {
                id: 4,
                message: action.newMessageBody
            };
            return {
                ...state,
                messages: [...state.messages, newText]
            };
        default:
            return state;
    }
};

export const addMessageActionCreator = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody });


export default dialogsReducer;