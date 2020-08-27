import React from 'react';
import { withRouter } from 'react-router-dom';
import HikeModel from '../models/hike';

import 'react-dropdown/style.css';
import './NewHike.css'

class NewHikeContainer extends React.Component {
  state = {
    name: '',
    city: '',
    state: '',
    difficulty: '',
    image: '',
    completed: false,
    rating: '',
    review: '',
    author: this.props.currentUser,
  };
  

  handleChange = (event) => {
    console.log(`This is the event target id: `, event.target.id);
    console.log(`This is the this.props.currentUser: `, this.props.currentUser);
    this.setState({author: this.props.currentUser})
    
    if (event.target.value === 'on') {
        event.target.value = true;
    }
    this.setState({[event.target.name]: event.target.value})
    // this.setState({author: this.props.currentUser})
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(`This is handleSubmit this.state: `, this.state)
    HikeModel.createHike(this.state)
      .then((result) => {
        console.log(`This is the result from the new: `, result);
      });
    this.props.history.push('/hikes');
  }

  toggle = () => {
    this.setState((prevState) => ({
        completed: !prevState.completed,
    }));
  }

  
  render() {
    console.log(`This.props.currentuser: `, this.props.currentUser)
    console.log(`This.state: `, this.state)

    return (
        <div className="new-ev">
            <div className="new-wrapper">
                <div className="new-hike">
                    <form onSubmit={this.handleSubmit}>
                        <h2>Add A New Hike</h2>
                        <div className="field">
                            <label htmlFor="">Name:</label>
                            <input className="name-new" onInput={this.handleChange} type="text" name="name" placeholder="Enter the name of the hike" required/>
                        </div>
                        <div className="field">
                            <label htmlFor="">City:</label>
                            <input className="city-new" onInput={this.handleChange} type="text" name="city" placeholder="Enter the hike location (City)" required/>
                        </div>
                        <div className="field">
                            <label htmlFor="">State:</label>
                            <input className="state-new" onInput={this.handleChange} type="text" name="state" placeholder="Enter the hike location (State)" required/>
                        </div>
                        <div className="field">
                            <label htmlFor="">Difficulty:</label>
                            
                            <select className="difficulty-new" name="difficulty" onChange={this.handleChange}>
                                <option value=''>Select a difficulty level</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>

                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="">Image:</label>
                            <input className="image-new" onInput={this.handleChange} type="text" name="image" placeholder="Enter an image URL"/>
                        </div>


                        <div className="field">
                            <label htmlFor="">Completed:</label>
                            <input className="completed-new" type="checkbox" name="completed" onClick={this.toggle}/>
                        </div>

                        {/* If Completed is true, can enter a rating and review */}
                        {this.state.completed && (
                            <div>
                                <div className="field">
                                    <label htmlFor="">Rating:</label>
                                    <input className="rating-new" onInput={this.handleChange} type="number" name="rating" placeholder="Enter a number 1 - 5"/>
                                </div>
                                <div className="field">
                                    <label htmlFor="">Review:</label>
                                    <input className="review-new" onInput={this.handleChange} type="text" name="review" placeholder="Enter your review of the hike"/>
                                </div>
                            </div>
                        )}

                        <button type="submit">Add Hike</button>
                    </form>
                </div>
            </div>
        </div>
    );
  }
}

export default withRouter(NewHikeContainer);
