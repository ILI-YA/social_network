import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utilits/validators';

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
        <div>
            <Field component={Textarea} validate={[required, maxLength50]} name='newMessageBody' placeholder='Enter your message...' />
        </div>
        <div>
            <button >Send</button>
        </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'}) (AddMessageForm);


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} />); 
    let messagesElements = state.messages.map ( m => <Message message={m.message} key={m.id} />);

    const addNewMessage = (value) => { 
        props.addMessage(value.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                { dialogsElements }
            </div>

            <div className={s.messages}>
                { messagesElements }
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage} />
        </div>
    )
}

export default Dialogs;