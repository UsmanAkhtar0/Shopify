import axios from "axios";

const instance = axios.create({
    baseURL: "https://shopifybackend-pxpl.onrender.com/api"  // "http://localhost:8000/api", for Prod "https://shopifybackend-pxpl.onrender.com/api"
    // withCredentials: true    // allow cookies to be send
})

export default instance; 