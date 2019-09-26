import * as axios from "axios";
const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'
// const instance = axios.create({
// baseUrl: 'https://social-network.samuraijs.com/api/1.0/'
// })
export const getUsers = (currentPage=1, pageSize=10) => {
  return axios.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`, {
    withCredentials: true
  })
    .then(response => {
      return response.data
    })
}

export const getProfile = (id) => {
  return axios.get(baseUrl+`${id}/`)
    .then(response => {
      return response.data
    })
}

export const authApi = () => {
  return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
    withCredentials: true
  })
    .then(response => {
      return response.data
    })
}