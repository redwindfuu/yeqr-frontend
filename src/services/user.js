import { axiosClient } from "src/utils/axios"


export const UserService = {

  getList: async (prop) => {
    // const {}
    return axiosClient.get('/user', {})
  }

}