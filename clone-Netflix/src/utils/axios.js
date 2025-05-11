import axios from "axios";
const instance = axios.create({
    baseURL:"https://api.themviesdb.org/3",
})
export default instance;