import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://localhost:8081/`
    // baseURL: `https://nameless-hamlet-89230.herokuapp.com/login`
  })
}