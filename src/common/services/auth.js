import { publicAxiosClient } from "src/common/utils/axios/public-axios";


export const AuthService = {

  signIn: async (username, password) => {
    const result = await publicAxiosClient.post('/auth/login', {
      username,
      password
    })

    return result;
  },

  signOut: async () => {
    // Here you should make a request to your API
    // to sign out the user
  }
}