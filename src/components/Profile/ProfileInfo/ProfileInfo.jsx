import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/preloader';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"


const ProfileInfo = ({profile, status, updateStatus}) => {
  if(!profile) { return <Preloader/> }

  return (
    <div>
      <div>
        <img src='https://opt-1313496.ssl.1c-bitrix-cdn.ru/upload/medialibrary/%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B9-%D0%91%D0%B5%D0%BB%D0%B0%D0%B2%D0%B8%D0%BD.jpg'></img>
      </div>
      <div className={classes.descriptionBlock}>
        <img src={profile.photos.large}></img>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  )
}

export default ProfileInfo;