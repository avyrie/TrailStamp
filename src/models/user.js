import axios from 'axios';
const url = `http://localhost:4000/api/users`
const token = localStorage.getItem('token')

class UserModel {
    static getAllUsers = () => {
    return fetch(url)
        .then((response) => response.json())
    }

    static getUserById = (userId) => {
        console.log(`This is userId from user model: `, userId)
        return (
            axios.get(`${url}/${userId}`)
        )
    }

    static delete = (user) => {
    let request = axios.delete(`${url}/${user}`);
    return request;
    };

    static edit = (user) => {
        console.log(`This is a user from the model in edit: `, user)
        return fetch(`${url}/${user._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'authorization': token,
        },
        body: JSON.stringify(user)
        })
        .then((response) => response.json())
    }
}

export default UserModel;
