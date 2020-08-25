import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Hike.css';
import DefaultHike from '../images/forest.png';

class Hike extends Component {
  state = {
    showReviews: false,
    hike: {}
  };
  

  // toggle = () => {
  //   if ({hike.completed} === 'Yes') {
  //     this.setState({showReviews: !this.state.showReviews})
  //   }
  // };

  deleteClickedHike = () => {
    console.log(`This is hike props from Hike.js: `, this.props)
    this.props.deleteHike(this.props.hike._id)
  };

  render() {
    console.log(this.props)
    const { hike, list } = this.props;

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

              {this.state.showReviews && (
                <section>
                  <p><strong>Rating: </strong> {hike.rating}</p>
                  <p><strong>Review: </strong> {hike.review}</p>
                </section>
              )}

              <button type="">Edit</button>
              <button onClick={this.deleteClickedHike}>Delete</button>
            </>
          )}
        </section>
      </div>
    );
  }
}
// function Hike (props) {
//   console.log(props)
//   const { hike, list } = props;

  
// }

export default Hike;
