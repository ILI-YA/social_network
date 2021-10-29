import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { required } from '../../utilits/validators';
import { createField, Input } from '../common/FormsControls/FormsControls';
import { login } from '../../redux/reducers/auth-reducers';
import { Redirect } from 'react-router';
import s from '../common/FormsControls/FormsControls.module.css';

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={ handleSubmit }>
            { createField(Input, [required], 'email', 'Email') }
            { createField(Input, [required], 'password', 'Password', {type: 'password'}) }
            { createField(Input, [], 'rememberMe', null, {type: 'checkbox'}, 'remember me') }

            { captchaUrl && <img src={captchaUrl} alt='captcha' /> }
            { captchaUrl && createField(Input, [required], 'captcha', 'Symbols from image')}


            { error && <div className={s.formSummaryError}>
                <p>{ error }</p>
            </div> }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' }) (LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to='/profile' />
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login);