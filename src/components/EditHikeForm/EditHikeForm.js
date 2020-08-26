import React from 'react';
import { withRouter } from 'react-router-dom';
import HikeModel from '../../models/hike'
import '../../pages/NewHike.css'

class EditHikeForm extends React.Component {
  state = {
    name: '',
    city: '',
    state: '',
    difficulty: '',
    image: '',
    completed: false,
    rating: '',
    review: '',
  };
  
  componentDidMount() {

    HikeModel.getHikeById(this.props.match.params.id)
      .then((result) => {
        console.log(`This is the result of getHikeById in Edit Hike: `, result);
        this.setState(result);
        console.log(`This is the new state: `, this.state)
      })
      .catch((err) => console.log(err))
  }

  onChange = (event) => {
    console.log(`This is the event target id: `, event.target.id);
    if (event.target.value === 'on') {
        event.target.value = true;
    }
    this.setState({[event.target.name]: event.target.value})
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(`This is this.state in EditForm: `, this.state)
    console.log(`This is this.props in EditForm: `, this.props)
    HikeModel.edit(this.state, this.props.match.params.id)
        .then((result) => {
            console.log(`This is the result from edit i guess: `, result)
            this.setState({result})  
        })
    
    this.props.history.push(`/hikes/${this.props.match.params.id}`);
  }

  toggle = () => {
    this.setState((prevState) => ({
        completed: !prevState.completed
    }))
  };

  render() {
      const { name, city, state, difficulty, image, completed, rating, review } = this.state
    return (
        <div className="new-ev">
            <div className="new-wrapper">
                <div className="new-hike">
                    <form onSubmit={this.handleSubmit}>
                        <h2>Edit Hike</h2>
                        <div className="field">
                            <label htmlFor="">Name:</label>
                            <input className="name-new" defaultValue={name} onChange={this.onChange} type="text" name="name"/>
                        </div>
                        <div className="field">
                            <label htmlFor="">City:</label>
                            <input className="city-new" defaultValue={city} onChange={this.onChange} type="text" name="city" />
                        </div>
                        <div className="field">
                            <label htmlFor="">State:</label>
                            <input className="state-new" defaultValue={state} onChange={this.onChange} type="text" name="state" />
                        </div>
                        <div className="field">
                            <label htmlFor="">Difficulty:</label>
                            <input className="difficulty-new" defaultValue={difficulty} onChange={this.onChange} type="text" name="difficulty" />
                        </div>
                        <div className="field">
                            <label htmlFor="">Image:</label>
                            <input className="image-new" defaultValue={image} onChange={this.onChange} type="text" name="image" />
                        </div>


                        <div className="field">
                            <label htmlFor="">Completed:</label>
                            <input className="completed-new" defaultValue={completed} type="checkbox" name="completed" onClick={this.toggle}/>
                        </div>

                        {/* If Completed is true, can enter a rating and review */}
                        {this.state.completed && (
                            <div>
                                <div className="field">
                                    <label htmlFor="">Rating:</label>
                                    <input className="rating-new" defaultValue={rating} onChange={this.onChange} type="number" name="rating"  />
                                </div>
                                <div className="field">
                                    <label htmlFor="">Review:</label>
                                    <input className="review-new" defaultValue={review} onChange={this.onChange} type="text" name="review"  />
                                </div>
                            </div>
                        )}

                        <button type="submit">Edit Hike</button>
                    </form>
                </div>
            </div>
        </div>
    );
  }
}

export default withRouter(EditHikeForm);
