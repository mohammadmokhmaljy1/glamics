import axios from 'axios'


  // get from cookies
const token = "t1"

const api = axios.create({
  baseURL: "https://92.113.27.167:4777/",  // replace with your actual base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    "Authorization" : `Bearer ${token}`
  },
})

export default api