import React from 'react';
// import { Link } from 'react-router-dom';
import './Profile.css';
import DefaultHike from '../images/forest.png';

function Hike (props) {
  console.log(props)
  const { profile } = props;

  return (
    <div className="prof-wrapper">
        <section className="image-wrapper">
            <img className="prof-image" src={profile.image ? profile.image : DefaultHike} alt={profile.name} />
        </section>
      
        <section className="content-wrapper">
            <h2 className="prof-name">Name: {profile.name}</h2>
            
            <button type="submit">Edit</button>
            <button type="submit">Delete</button> 
        </section>


    </div>
  );
}

export default Hike;
