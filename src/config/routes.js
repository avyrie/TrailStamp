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
        <Route exact path='/' component={Home}/>

        <Route path='/users/:id' render={() => 
            <UserContainer setCurrentUser={setCurrentUser} currentUser={currentUser} logout={logout}/>}/>
            
        <Route path='/signup' component={SignUp}/>

        <Route path='/login' render={() =>
            <Login setCurrentUser={setCurrentUser}/>}
            />

        {/* <Route exact path='/hikes' component={HikesListContainer}/> */}
        <Route exact path='/hikes' render = {props => <HikesListContainer {...props} currentUser={currentUser} />}  />

        <Route path='/hikes/new' render={() => 
            <NewHikeContainer currentUser={currentUser}/>} 
            />

        <Route path='/hikes/:id/edit' component={EditHikeForm} />

        <Route path='/hikes/:id' render = {props => <HikeContainer {...props} currentUser={currentUser} />}  />
        {/* <Route path='/hikes/:id' component={HikeContainer} /> */}
        {/* <Route path='/hikes/:id' render={() => 
            <HikeContainer currentUser={currentUser}/>} 
            /> */}
        
            
    </Switch>
        
)

{/* <Route path='/hikes/new' render={() => 
currentUser 
? <NewHikeContainer/> 
: <Redirect to='/login'/>  
}/>
</Switch> */}