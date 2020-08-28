import React from 'react';
import Hike from '../components/Hike/Hike';
import HikeModel from '../models/hike';

class HikeContainer extends React.Component {
  state = {
    hike: {},
  };

  componentDidMount() {
    HikeModel.getHikeById(this.props.match.params.id)
    .then((result) => {
      this.setState({hike: result});
    })
    .catch((err) => console.log(err))
  }

  // Delete Hike
    deleteHike = (hike) => {
        HikeModel.delete(hike).then((res) => {
            this.props.history.push('/hikes')
            this.setState({hike});
        });
    };

  render() {
    return (
        <Hike hike={this.state.hike} list={false} deleteHike={this.deleteHike} edit={this.edit} currentUser={this.props.currentUser}/>
        )
    }
}

export default HikeContainer;
