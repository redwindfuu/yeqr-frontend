import { publicAxiosClient } from "src/common/utils/axios/public-axios";
import { authAxiosClient } from "../utils/axios/auth-axios";


export const AuthService = {

  signIn: async (username, password) => {
    const result = await publicAxiosClient.post('/auth/login', {
      username,
      password
    })
    return result;
  },

  signOut: async () => {
    return await authAxiosClient.post('/auth/logout', {})
  }

}