// import axios from 'axios';
const url = `http://localhost:4000/api/hikes`
const token = localStorage.getItem('token')

class HikeModel {
  static getAllHikes = () => {
    return fetch(url)
      .then((response) => response.json())
  }

  static getHikeById = (hikeId) => {
    return fetch(`${url}/${hikeId}`)
      .then((response) => response.json())
  }

  static createHike = (hike) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token,
      },
      body: JSON.stringify(hike)
    })
      .then((response) => response.json())
  }

//   static delete = (hike) => {
//     let request = axios.delete(`${url}/${hikeId}`);
//     return request;
//   };
//   static update = (hike) => {
//     let request = axios.put(`${url}/${hikeId}`, hike);
//     return request;
//   };
}



export default HikeModel;
