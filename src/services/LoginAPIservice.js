import axios from "axios"

export function LoginAPIservice(userDetails) {
    return  axios.post('/api/auth/login', {
        email: userDetails.email,
        password: userDetails.password
    })
}
