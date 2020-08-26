import axios from 'axios';
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
    console.log(`This is a hike from the model: `, hike)
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

  static delete = (hike) => {
    let request = axios.delete(`${url}/${hike}`);
    return request;
  };

static edit = (hike) => {
    console.log(`This is a hike from the model in edit: `, hike)
    return fetch(`${url}/${hike._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token,
      },
      body: JSON.stringify(hike)
    })
      .then((response) => response.json())
  }
}

export default HikeModel;
