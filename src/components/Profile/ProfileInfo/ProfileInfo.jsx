import React, { useState } from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/preloader';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"
import ProfileDataForm from './ProfileDataForm';
import userPhoto from './../../../assets/images/user_image.png'


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto  }) => {

  let [editMode, setEditMode] = useState(false);

  if (!profile) { return <Preloader /> }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
        savePhoto(e.target.files[0]);
    }
  }

  return (
    <div>
      <div>
        <img src='https://opt-1313496.ssl.1c-bitrix-cdn.ru/upload/medialibrary/%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B9-%D0%91%D0%B5%D0%BB%D0%B0%D0%B2%D0%B8%D0%BD.jpg' className={classes.wallpaper}></img>
      </div>
      <div className={classes.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} className={classes.mainPhoto}></img>
        { isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        {editMode 
        ? <ProfileDataForm profile={profile} />
        : <ProfileData profile={profile} isOwner={isOwner} activateEditMode={() => {setEditMode(true) }}/>}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  )
}

const ProfileData = ({profile, isOwner, activateEditMode}) => {
  return <div>
          {isOwner && <div><button onClick={activateEditMode}></button></div>}
          <div>
            <b>Full name: </b> {profile.fullName ? "yes" : "no"}
          </div>
          <div>
            <b>Looking for a job: </b> {profile.lookingForAJob ? "yes" : "no"}
          </div>
          { profile.lookingForAJob &&
          <div>
            <b>Scills: </b> {profile.lookingForAJobDescription ? "yes" : "no"}
          </div>
          }
          <div>
            <b>About me: </b> {profile.aboutMe}
          </div>
          <div>
            <b>Contact: </b> { Object.keys(profile.contacts).map(key => {
              return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
          </div>
        </div>
}


const Contact = ({contactTitle, contactValue}) => {
return <div className={classes.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;