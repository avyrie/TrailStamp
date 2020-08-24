import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Hike.css';
import DefaultHike from '../images/forest.png';

function Hike (props) {
  console.log(props)
  const { hike, list } = props;

  return (
    <div className="hike-wrapper">
      <Link to={`/hikes/${hike._id}`}>
        <h2 className="hike-name">{hike.name}</h2>
        <section className="image-wrapper">

          <img className="hike-image" src={hike.image ? hike.image : DefaultHike} alt={hike.name} />
        </section>
      </Link>
      <section className="content-wrapper">

        {!list && (
          <>
            <p><strong>Location: </strong> {hike.city}, {hike.state}</p>
            <p><strong>Difficulty: </strong> {hike.difficulty}</p>

            <p>Completed: {hike.completed ? 'Yes' : 'No'}</p>
            {/* if completed === 'Yes' */}
            {/* <p><strong>Rating: </strong> {hike.rating}</p>
            <p><strong>Review: </strong> {hike.review}</p> */}
            <button type="submit">Edit</button>
            <button type="submit">Delete</button>
          </>
        )}
      </section>


    </div>
  );
}

export default Hike;
