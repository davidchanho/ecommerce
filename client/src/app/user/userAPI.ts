import axios from 'axios'

const url = "http://localhost:3001/api"


export function loginUser(email: string, password: string) {
  return axios.post(url + '/login', { email, password })
}

export function registerUser(email: string, password: string, first_name: string, last_name: string) {
  return axios.post(url + '/register', { email, password, first_name, last_name })
}
