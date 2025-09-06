import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8000/api",
    // withCredentials: true    // allow cookies to be send
})

export default instance;