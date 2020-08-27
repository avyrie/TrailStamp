import React from 'react';
import Hike from '../Hike/Hike';
import Profile from '../Profile/Profile';
import './HikesList.css';

function HikesList(props) {
    console.log(`This is the props in HikeList: `, props)
    const hikesList = props.hikes.map((hikeObj) => {
        return(
            <Hike 
            key={hikeObj._id} 
            hike={hikeObj} 
            deleteHike={props.deleteHike}
            list={true}
            updateHike={props.updateHike} 
            />
        ) 
    });

    for (let i = 0; i < props.hikes.length; i++) {
        if (props.currentUser != props.hikes[i].author) {
            // let hidden = 'hidden'
            console.log(`THIS DOES NOT MATCH CURRENT USER: `, props.hikes[i].name)
        } else {
            let hidden = ''
        }
    }

  return (
    <div>
        <Profile />
    <div className="hikes-container">
        <div className="list-container">
            {hikesList}
        </div>
    </div>

    </div>
  );
}

export default HikesList;
