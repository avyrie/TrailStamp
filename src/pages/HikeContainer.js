import React from 'react';
import Hike from '../components/Hike/Hike';
import HikeModel from '../models/hike';
import { Redirect } from 'react-router-dom';

class HikeContainer extends React.Component {
  state = {
    hike: {},
  };

  componentDidMount() {
    // Get All Hikes
    HikeModel.getHikeById(this.props.match.params.id)
      .then((result) => {
        console.log(result);
        this.setState({hike: result});
      })
      .catch((err) => console.log(err))
  }

    deleteHike = (hike) => {
        HikeModel.delete(hike).then((res) => {
            this.props.history.push('/hikes')
            this.setState({hike});
        });
    };

  render() {
    console.log(this.props);
    return (
        <Hike hike={this.state.hike} list={false} deleteHike={this.deleteHike} />
        )
    }
}

export default HikeContainer;
