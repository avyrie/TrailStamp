import React from 'react';
import Hike from '../Hike/Hike';
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

  return (
    <div className="hikes-container">
        <h2>List of Hikes</h2>
        <div className="list-container">
            {hikesList}
        </div>
    </div>
  );
}

export default HikesList;
