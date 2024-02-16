import { publicAxiosClient } from "src/utils/axios"


export const AuthService = {

  signIn : async (username, password) => {
    return await publicAxiosClient.post('/auth/login', {
      username,
      password
    })
  },

  signOut : async () => {
    // Here you should make a request to your API
    // to sign out the user
  }
}