import React from 'react';
import Hike from '../components/Hike/Hike';
import HikeModel from '../models/hike';

class HikeContainer extends React.Component {
  state = {
    hike: {},
  };

  componentDidMount() {
    // Get All Games
    HikeModel.getHikeById(this.props.match.params.id)
      .then((result) => {
        console.log(result);
        this.setState({hike: result});
      })
      .catch((err) => console.log(err))
  }

  render() {
    console.log(this.props);
    return (
        <Hike hike={this.state.hike} list={false} />
        )
    }
}

export default HikeContainer;
