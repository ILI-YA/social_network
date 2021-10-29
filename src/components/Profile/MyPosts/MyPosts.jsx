import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utilits/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
        <div>
            <Field component={Textarea} name='newPostText' validate={[required, maxLength10]} placeholder='Enter your message...' />
        </div>
        <div>
            <button >Send</button>
        </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({form: 'profileAddNewPostText'}) (AddNewPostForm);

const MyPosts = (props) => {
    let postsElements = props.posts.map( p => <Post key={p.id} message={p.message} likeCounts={p.likeCounts}/>);

    const onAddPost = (value) => {
        props.addPost(value.newPostText);
    }

    return (
        <div>
            <h3>My post</h3>
            <div className={s.form}>
                <AddNewPostReduxForm onSubmit={onAddPost} />
            </div>
            { postsElements }
        </div>
    )
};

export default MyPosts;