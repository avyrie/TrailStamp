import React from 'react';
import HikesList from '../components/HikesList/HikesList';
import HikeModel from '../models/hike';

class HikesListContainer extends React.Component {
  state = {
    hikes: [],
  };

  componentDidMount() {
    HikeModel.getAllHikes()
      .then((result) => {
        // console.log(result);
        this.setState({hikes: result});
      })
      .catch((err) => console.log(err))
  };

  render() {
    return <HikesList hikes={this.state.hikes} />;
  };
}

export default HikesListContainer;