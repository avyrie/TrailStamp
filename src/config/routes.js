import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Profile from '../components/Profile/Profile';
import SignUp from '../components/SignUp/SignUp';
import Login from '../components/Login/Login';
import HikesListContainer from '../pages/HikesListContainer';
import HikeContainer from '../pages/HikeContainer';
import NewHikeContainer from '../pages/NewHikeContainer';
import EditHikeForm from '../components/EditHikeForm/EditHikeForm';
import UserContainer from '../pages/UserContainer';

export default ({ currentUser, setCurrentUser, logout }) => (
    <Switch>
        {/* User Profile Page
        <Route path='/users/:id' render={() => 
        <UserContainer setCurrentUser={setCurrentUser} currentUser={currentUser} logout={logout}/>}/> */}
       
        {/* Home Page */}
        <Route exact path='/' component={Home}/>
        {/* Signup Page */}
        {/* <Route path='/signup' component={SignUp}/> */}
        <Route path='/signup' render={() => 
            <Signup setCurrentUser={setCurrentUser}/>}
            />
        {/* Login Page */}
        <Route path='/login' render={() =>
            <Login setCurrentUser={setCurrentUser}/>}
            />
        {/* Profile Page */}
        <Route exact path='/hikes' render = {props => <HikesListContainer {...props} currentUser={currentUser} />}  />
        {/* Add New Hike Page */}
        <Route path='/hikes/new' render={() => 
            <NewHikeContainer currentUser={currentUser}/>} 
            />
        {/* Hike Edit Page */}
        <Route path='/hikes/:id/edit' component={EditHikeForm} />
        {/* Hike Show Page */}
        <Route path='/hikes/:id' render = {props => <HikeContainer {...props} currentUser={currentUser} />}  />
    </Switch>       
)