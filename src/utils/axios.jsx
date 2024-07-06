import axios from 'axios';

const instance = axios.create({
    baseURL:"https://fakestoreapi.com/",
})
// api yaha call hui hai

export default instance;