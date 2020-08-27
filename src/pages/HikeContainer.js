import React from 'react';
import Hike from '../components/Hike/Hike';
import HikeModel from '../models/hike';
// const url = `http://localhost:4000/api/hikes`
// const token = localStorage.getItem('token')

class HikeContainer extends React.Component {
  state = {
    hike: {},
  };

  componentDidMount() {
    HikeModel.getHikeById(this.props.match.params.id)
    .then((result) => {
      console.log(`This is the result of getHikeById in hike container: `, result, ` And this is the this.props: `, this.props);
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
    console.log(`This is this.props from HC: `, this.props);
    return (
        <Hike hike={this.state.hike} list={false} deleteHike={this.deleteHike} edit={this.edit}/>
        )
    }
}

export default HikeContainer;
