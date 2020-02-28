import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../Common/FormsControl/FormsControl';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../Redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import styles from './../Common/FormsControl/FormsControl.module.css'


const LoginForm = ({error, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
        <div>

            <Field placeholder={"Email"} name={"email"} validate={[required]} component={Input}/>
        </div>
        <div>
            <Field placeholder={"Password"} name={"password"} type={"password"} validate={[required]} component={Input} />
        </div>
        <div>
            <Field type={"Checkbox"} name={"rememberMe"} component={Input} /> remember
        </div>
        {error && <div className={styles.formSummaryError}> {error} </div>}
        <div>                
            <button>Login</button>                
        </div>
    </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => { 
        props.login(formData.email, formData.password, formData.rememberMe) 
    }

    if (props.isAuth) {
        return <Redirect to={"/Profile"} />
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);