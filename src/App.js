import React from 'react';
import {BrowserRouter as Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import { connect } from 'react-redux';
import { initializeApp } from './redux/reducers/app-reducers';
import Preloader from './components/common/Preloader/Preloader';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy( () => import('./components/Dialogs/DialogsContainer') );
const ProfileContainer = React.lazy( () => import('./components/Profile/ProfileContainer') );
const UsersContainer = React.lazy( () => import('./components/Users/UsersContainer') );
const Music = React.lazy( () => import('./components/Music/Music') );
const News = React.lazy( () => import('./components/News/News') );
const Settings = React.lazy( () => import('./components/Settings/Settings') );
const Login = React.lazy( () => import('./components/Login/Login') );



class App extends React.Component{
  componentDidMount() {
    this.props.initializeApp();
  }

  render(){
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="App">
        <Switch>
  
          <Route path="/" exact>
              <Redirect to="/profile" />
          </Route>
  
          <div className="container">
                <HeaderContainer />
                <NavBar />
                <div className="content">
                  <Route path="/profile/:userId?" 
                          render={withSuspense(ProfileContainer)}/>
                  <Route path="/dialogs" 
                          render={withSuspense(DialogsContainer)} />
                  <Route path="/users" render={withSuspense(UsersContainer)} />
                  <Route path="/music" render={withSuspense(Music)} />
                  <Route path="/news" render={withSuspense(News)} />
                  <Route path="/settings" render={withSuspense(Settings)} />
                  <Route path="/login" render={withSuspense(Login)} />
  
                  {/* <Route path="/friends" render={ () => <Friends /> } />  */}
                </div>
                <Footer />
          </div> 
  
        </Switch>
      </div>
    );
  }
}  

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp }) (App);
