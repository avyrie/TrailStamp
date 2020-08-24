import React from 'react';
import { withRouter } from 'react-router-dom';
import HikeModel from '../models/hike';
import './NewHike.css'

class NewHikeContainer extends React.Component {
  state = {
    name: '',
    city: '',
    state: '',
    difficulty: '',
    image: '',
    completed: false,
  };

  handleChage = (event) => {
    // console.log(event.target.id);
    if (event.target.value === 'on') {
      event.target.value = true;
    }
    
    this.setState({[event.target.name]: event.target.value})
  };

  handleSubmit = (event) => {
    event.preventDefault();
    HikeModel.createHike(this.state)
      .then((result) => {
        console.log(result);
      });
    this.props.history.push('/hikes');
  }

  render() {
    return (
        <div className="new-ev">
            <div className="new-wrapper">
                <div className="new-hike">
                    <form onSubmit={this.handleSubmit}>
                        <h2>Add A New Hike</h2>
                        <div className="field">
                            <label htmlFor="">Name:</label>
                            <input className="name-new" onInput={this.handleChage} type="text" name="name" required/>
                        </div>
                        <div className="field">
                            <label htmlFor="">City:</label>
                            <input className="city-new" onInput={this.handleChage} type="text" name="city" required/>
                        </div>
                        <div className="field">
                            <label htmlFor="">State:</label>
                            <input className="state-new" onInput={this.handleChage} type="text" name="state" required/>
                        </div>
                        <div className="field">
                            <label htmlFor="">Difficulty:</label>
                            <input onInput={this.handleChage} type="text" name="difficulty" required/>
                        </div>
                        <div className="field">
                            <label htmlFor="">Image:</label>
                            <input className="image-new" onInput={this.handleChage} type="text" name="image" />
                        </div>
                        <div className="field">
                            <label htmlFor="">Completed:</label>
                            <input onInput={this.handleChage} type="checkbox" name="completed" />
                        </div>
                        <button type="submit">Add Hike</button>
                    </form>
                </div>
            </div>
        </div>
    );
  }
}

export default withRouter(NewHikeContainer);
