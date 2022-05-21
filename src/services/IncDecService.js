import axios from "axios"

export default function IncDecService(task,id,token) {
    return  axios.post(`/api/user/cart/${id}`, { action: { type: `${task}` } }, { headers: { authorization: token } })
}
