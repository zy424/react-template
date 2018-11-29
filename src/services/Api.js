import axios from 'axios';

export default class Api {
    constructor () {
        this.axios = axios.create({
            baseURL: process.env.BASE_URL,
        });
    }
}
