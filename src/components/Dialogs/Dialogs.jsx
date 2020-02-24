import React from 'react'; 
import classes from './Dialogs.module.css';
import { NavLink, Redirect } from 'react-router-dom';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem id={d.id} key={d.id} DialogItem name={d.name} />);
    let messageElements = state.messages.map(m => <Message id={m.id} key={m.id} message={m.message} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onMessageChange} placeholder="Enter your message"></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;