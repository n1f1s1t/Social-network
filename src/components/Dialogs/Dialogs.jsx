import React from 'react'; 
import classes from './Dialogs.module.css';
import { NavLink, Redirect } from 'react-router-dom';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../Common/FormsControl/FormsControl';
import { required, maxLengthCreater } from '../../utils/validators/validators';


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem id={d.id} key={d.id} DialogItem name={d.name} />);
    let messageElements = state.messages.map(m => <Message id={m.id} key={m.id} message={m.message} />);
    let newMessageBody = state.newMessageBody;
    
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messageElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}

const maxLength50 = maxLengthCreater(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength50]} name="newMessageBody" placeholder="Enter your message" />
            </div>
            <div><button>Send</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogsAddMessageForm"})(AddMessageForm)

export default Dialogs;