/*
This axios object connects with firebase.
 */
import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-fde58.firebaseio.com/'
});

export default instance;



