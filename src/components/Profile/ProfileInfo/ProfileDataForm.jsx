import React from 'react';
import { createField, Input, Textarea } from '../../Common/FormsControl/FormsControl';
import { reduxForm } from 'redux-form';
import classes from './ProfileInfo.module.css';

const ProfileDataForm = ({ profile, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
          <div><button></button></div>
          <div>
            <b>Full name: </b> {createField("", "lookingForAJob", [], Input, {type: "checkbox"})} 
          </div>
          <div>
          <b>Looking for a job: </b> {createField("", "lookingForAJob", [], Input, {type: "checkbox"} )}
          </div>
          <div>
            <b>Scills: </b> {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
          </div>
          <div>
            <b>About me: </b> {createField("About me", "aboutMe", [], Textarea)}
          </div>
          <div>
            <b>Contact: </b> {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={classes.contact}>
            <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
            </div>
            })}
          </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;