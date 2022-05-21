import axios from "axios"

export  function DeleteListService(route,id,token) {
  return   axios.delete(`/api/user/${route}/${id}`, { headers: { authorization: token } })
}
