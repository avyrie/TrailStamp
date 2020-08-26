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
        console.log(`This is the result: `, result);
        this.setState({hikes: result});
      })
      .catch((err) => console.log(err))
  };

//   deleteHike = (hike) => {
//       console.log(`This is a hike: `, hike)
//     HikeModel.delete(hike).then((res) => {
//         let hikes = this.state.hikes.filter((hike) => {
//           return hike._id !== res.data._id;  
//         });
//         this.setState({hikes});
//     })
//     .then(() => this.props.history.push('/hikes'));
// };

  render() {
    return <HikesList hikes={this.state.hikes} deleteHike={this.deleteHike} />;
  };
}

export default HikesListContainer;