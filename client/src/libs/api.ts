import axios from "axios";

export const api = axios.create({
    baseURL: 'http://172.16.239.1:3000'
})