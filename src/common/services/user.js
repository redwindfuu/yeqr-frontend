import { authAxiosClient } from "src/common/utils/axios/auth-axios"


export const UserService = {

  getList: async (prop) => {
    // const {}
    return authAxiosClient.get('/user', {})
  },
  getById: async (id, prop) => {
    return {}
  },

}