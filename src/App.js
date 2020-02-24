import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';


const App = () => {
  return (
    <div className='app-wripper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wripper-content'>
        <Route path='/dialogs'
          render={() => <DialogsContainer />} />

        <Route path='/profile/:userId?'
          render={() => <ProfileContainer />} />
        <Route path='/users'
          render={() => <UsersContainer />} />
        <Route path='/login'
          render={() => <Login />} />
        <Route path='/News' component={News} />
        <Route path='/Music' component={Music} />
        <Route path='/Setting' component={Setting} />
      </div>
    </div>
  );
}

export default App;
