import axios from 'axios';
const instance = axios.create({
    baseUrl: "https://tiktobackend.herokuapp.com/",
})

export default instance