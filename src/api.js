import axios from "axios"

const base_url = "http://localhost:8080/todo"


const axiosInstance = axios.create({
    baseURL : base_url
})

export default axiosInstance