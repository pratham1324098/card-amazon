import axios from 'axios';
const instance = axios.create({
    baseURL:'http://127.0.0.1:5001/codes882/us-central1/api'//The API URL(cloud function)
});
export default instance;