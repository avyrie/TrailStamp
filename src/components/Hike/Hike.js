import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DefaultHike from '../images/forest.png';
import Stamp from "../images/leafstampc.png"
import './Hike.css';

class Hike extends Component {
  state = {
    showReviews: false,
    hike: {},
  };

  deleteClickedHike = () => {
    this.props.deleteHike(this.props.hike._id)
  };

  render() {
    const { hike, list } = this.props;
    let hidden = hike.completed ? '' : 'hidden'

      return (
          <div className="hike-wrapper">
              <Link to={`/hikes/${hike._id}`}>
                <section className="hike-image-wrapper away">
                  <img className="hike-image bottomlayer" src={hike.image ? hike.image : DefaultHike} alt={hike.name} />
                  <div>
                    <img className={hike.completed ? "hike-image toplayer" : "hidden"} src={hike.completed ? Stamp : hike.image} />
                  </div>
                </section>
              </Link>
      
              {!list && (
                <div className='everything'>
                <section className="content-wrapper">
                  <img className="hike-show-image" src={hike.image ? hike.image : DefaultHike} alt={hike.name} />
                  <h2 className="hike-name"><strong>Name: </strong>{hike.name}</h2>
                  <p><strong>Location: </strong> {hike.city}, {hike.state}</p>
                  <p><strong>Difficulty: </strong> {hike.difficulty}</p>
      
                  <p><strong>Completed:</strong> {hike.completed ? 'Yes' : 'No'}</p>
  
                <section className={ hidden }>
                  <p><strong>Rating: </strong> {hike.rating}</p>
                  <p><strong>Review: </strong> {hike.review}</p>
                </section>
                
                <section className="alter-buttons">
                  <Link to={`/hikes/${hike._id}/edit`}><button>Edit</button></Link>
                  <button onClick={this.deleteClickedHike}>Delete</button>
                </section>
                  </section>
                </div>
              )}
          </div> 
      );
  }
}

export default Hike;
