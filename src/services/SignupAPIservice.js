import axios from "axios";

export default function SignupAPIservice(userData) {
  return axios.post(
    `/api/auth/signup`,
    JSON.stringify({
      firstName: userData.name,
      lastName: userData.name,
      email: userData.email,
      password: userData.password,
    })
  );
}
