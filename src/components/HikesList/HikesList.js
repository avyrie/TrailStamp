import React from 'react';
import Hike from '../Hike/Hike';
import './HikesList.css';

function HikesList(props) {
  const hikesList = props.hikes.map((hikeObj) => {
    return(
        <Hike 
        key={hikeObj._id} 
        hike={hikeObj} 
        list={true}
        deleteHike={props.deleteHike}
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
