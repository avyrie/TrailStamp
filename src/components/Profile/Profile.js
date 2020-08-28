import React, { Component } from 'react';
import axios from 'axios';
import DefaultHike from '../images/forest.png';
import UserContainer from '../../pages/UserContainer';
import UserModel from "../../models/user"
import HikesList from '../HikesList/HikesList';
import './Profile.css';
const url = `http://localhost:4000/api/users`



class Profile extends Component {
  state = {
    profile: {}
  }

  componentDidMount() {
    this.getUserProfile()
  }
  getUserProfile() {
    const currentUserId = localStorage.getItem('id')
    console.log(`This is currentUser in Profile.js: `, currentUserId)
    axios.get(`${url}/${currentUserId}`)
      .then(resp => {
        console.log(`THS IS THE RESP FROM axios: `, resp)
        this.setState({profile: resp.data.data});
      });
    // console.log(`THIS.PROPS.CURRENTUSER: `, this.props.currentUser)
    // fetch(`${url}/${this.props.currentUser}`)
    //   .then(resp => {
    //     console.log(`THIS IS RESP!!!!!: `, resp)
    //   })

  }


  render() {
    console.log(`This is props from Profile.js: `, this.props)
    console.log(`This is state from Profile.js: `, this.state)
    const profile = this.state.profile
    return (
        <div className="prof-wrapper">
            <section className="image-wrapper">
                <img className="prof-image" src={profile.image ? profile.image : DefaultHike} alt={profile.name} />
            </section>
            <section className="profile-wrapper">
                <h2 className="prof-name"> {profile.name}</h2>
                
                {/* <button type="submit">Edit</button>
                <button type="submit">Delete</button>  */}
            </section>
        </div>
    )
    }
}

export default Profile;
