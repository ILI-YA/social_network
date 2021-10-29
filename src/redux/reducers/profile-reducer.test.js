import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer';

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCounts: '15'},
        {id: 2, message: 'Good!', likeCounts: '9'},
        {id: 3, message: 'What are you doing?', likeCounts: '10'},
    ]
};


test('length of posts should be incremented', () => {
    let action = addPostActionCreator('hello, my friend');
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
});

test('message of new posts should be correct', () => {
    let action = addPostActionCreator('hello, my friend');
    let newState = profileReducer(state, action);
    expect(newState.posts[3].message).toBe('hello, my friend');
});

test('after deleting length of posts should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2);
});

test(`after deleting length shouldn't be decrement if id incorrect`, () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});
