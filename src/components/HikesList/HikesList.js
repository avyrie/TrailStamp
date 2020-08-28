import React from 'react';
import Hike from '../Hike/Hike';
import Profile from '../Profile/Profile';
import './HikesList.css';

function HikesList(props) {
    console.log(`This is the props in HikeList: `, props)
    const hikesList = props.hikes.filter(hikeObj => hikeObj.author === props.currentUser
    ).map(aHike => {
        return(
            <Hike 
            key={aHike._id} 
            hike={aHike} 
            deleteHike={props.deleteHike}
            list={true}
            updateHike={props.updateHike}
            />
        )
    })
    return (
      <div className="profile-container">
          <div className="profile-wrap">
            <Profile />
            <div className="hikes-container">
                    <h2 className="ts">Trail Stamp</h2>
                <div className="hike-border">
                    <div className="list-container">
                        {hikesList}
                    </div>
                </div>
                <h5 className="mountains">The mountains are calling... and I must go</h5>
            </div>
          </div>
    
      </div>
    );
}
//     const hikesList = props.hikes.map((hikeObj) => {
//         return(
//             <Hike 
//             key={hikeObj._id} 
//             hike={hikeObj} 
//             deleteHike={props.deleteHike}
//             list={true}
//             updateHike={props.updateHike}
//             visible={true}
//             />
//         ) 
//     }
// );
    // if (props.currentUser != props.hikes.author) {
    //     console.log(`THIS DOES NOT MATCH CURRENT USER: `, props.hikes.name)
    //     return(
    //         <></>
    //     ) 
    // } else {
    //     return(
    //         <Hike 
    //         key={hikeObj._id} 
    //         hike={hikeObj} 
    //         deleteHike={props.deleteHike}
    //         list={true}
    //         updateHike={props.updateHike}
    //         visible={true}
    //         />
    //     ) 
    // }

    // for (let i = 0; i < props.hikes.length; i++) {
    //     if (props.currentUser != props.hikes[i].author) {
    //         // let hidden = 'hidden'
    //         console.log(`THIS DOES NOT MATCH CURRENT USER: `, props.hikes[i].name)
    //     } else {
    //         // let hidden = ''
    //     }
    // }


export default HikesList;
