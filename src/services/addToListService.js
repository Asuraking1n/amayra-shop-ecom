import axios from "axios"

export default function addToListService(route,product,token) {
  return axios.post(`/api/user/${route}`, { product }, { headers: { authorization: token } })
}
