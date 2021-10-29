import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls';
import s from './ProfileInfo.module.css'


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit} >
        <div><button>save</button></div>
        { error && <div className={s.error}>
            <p>{ error }</p>
        </div> 
        }
        <div>
            <b>Full name :</b> {createField(Input, [], 'fullName', 'Full name')}
        </div>
        <div>
            <b>Looking for a job :</b> {createField(Input, [], 'lokingForAJob', '', {type: 'checkbox'})}
        </div>
        <div>
            <b>Professional skills :</b> {createField(Textarea, [], 'lookingForAJobDescription', 'My professional skills')}
        </div>
        <div>
            <b>About me :</b> {createField(Textarea, [], 'aboutMe', 'About me')}
        </div>
        <div>
            <b>Contacts :</b> {Object.keys(profile.contacts).map(key => {
                return <div>
                   <b>{key} : {createField(Input, [], 'contacts.' + key, key)}</b>
                </div>
            })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;