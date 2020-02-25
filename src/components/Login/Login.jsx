import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../Common/FormsControl/FormsControl';
import { required } from '../../utils/validators/validators';


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>

            <Field placeholder={"Login"} name={"login"} validate={[required]} component={Input}/>
        </div>
        <div>
            <Field placeholder={"Password"} name={"password"} validate={[required]} component={Input} />
        </div>
        <div>
            <Field type={"Checkbox"} name={"rememberMe"} component={Input} /> remember
        </div>
        <div>                
            <button>Login</button>                
        </div>
    </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => { console.log(formData) }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;