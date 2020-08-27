import React, { Component }  from 'react';
import {withRouter} from  'react-router-dom';
import axios from 'axios';
import Profile from '../components/Profile/Profile'
import UserModel from '../models/user';



class UserContainer extends Component{

  state = {
    user: {},
    userData: [],
  }

  // componentDidMount() {
  //   this.fetchData();
  // }
  // fetchData = async () => {
  //   const userData = await axios.get(`${process.env.REACT_APP_API}/users/${this.props.currentUser}`, { withCredentials: true });
    
  //   this.setState({
  //     userData: userData.data.data,
  //   })
  //   console.log(`This is userData from user container: `, userData)
  // };

  componentDidMount() {
    UserModel.getUserById(this.props.match.params.id)
    .then((result) => {
      console.log(`This is the result of getUserById in user container: `, result, ` And this is the this.props: `, this.props);
      this.setState({user: result});
    })
    .catch((err) => console.log(`This is error from user container: `, err))
  }
  
  
  handleUserUpdate = (event, updatedState) => {
    event.preventDefault();
    axios.put(`${process.env.REACT_APP_API}/users/${this.props.currentUser}`,updatedState, { withCredentials: true })
     .then(res => {
       this.setState({
          userData: updatedState
       })
     })
     .catch(err => console.log(`This is the error from user update in user container: `, err)) 
  }
  
  handleUserDelete = (event) => {
    event.preventDefault();
    axios.delete(`${process.env.REACT_APP_API}/users/${this.props.currentUser}`, { withCredentials: true })
     .then(res => {
      this.props.logout()
     })
    .catch(err => console.log(`This is the error from user delete in user container: `, err))
  }

  render () {
    const profileData = this.state.userData

    return (
      <>
       <Profile profileData={profileData} currentUser={this.props.currentUser} handleUserUpdate={this.handleUserUpdate} handleUserDelete={this.handleUserDelete } />
      </>
    )
  }
} 


export default withRouter(UserContainer);