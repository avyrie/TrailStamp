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

export default () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/login' component={Login}/>
        <Route exact path='/hikes' component={HikesListContainer}/>
        <Route path='/hikes/new' render={() => 
            <NewHikeContainer />} 
            />
        <Route path='/hikes/:id/edit' component={EditHikeForm} />
        <Route path='/hikes/:id' component={HikeContainer} />
        

    </Switch>
        
)

{/* <Route path='/hikes/new' render={() => 
currentUser 
? <NewHikeContainer/> 
: <Redirect to='/login'/>  
}/>
</Switch> */}