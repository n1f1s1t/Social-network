import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import {Route, withRouter, HashRouter} from 'react-router-dom';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import {initialazeApp} from './Redux/app-reducer'
import { compose } from 'redux';
import Preloader from './components/Common/Preloader/preloader';
import store from "./Redux/redux-store";
import { Provider } from 'react-redux';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initialazeApp()
  }

  render() {
    if (!this.props.initialazed) {
      return <Preloader />
    }

    return (
      <div className='app-wripper' >
        <HeaderContainer />
        <Navbar />
        <div className='app-wripper-content'>
          <Route path='/dialogs'
            render={() => {
              return (
                <Suspense fallback={<div>Загрузка...</div>}>
                  <DialogsContainer />
                </Suspense>)
            }} />

          <Route path='/profile/:userId?'
            render={() => {
              return (
                <Suspense fallback={<div>Загрузка...</div>}>
                  <ProfileContainer />
                </Suspense>)
            }} />
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
}

const mapStateToProps = (state) => ({
  initialazed: state.app.initialazed
})

let AppContainer = compose(withRouter, connect(mapStateToProps, {initialazeApp})) (App);

let MainApp =  (props) => {
  return <HashRouter >
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter>
}

export default MainApp