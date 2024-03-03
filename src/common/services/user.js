import { authAxiosClient } from "src/common/utils/axios/auth-axios";


export const userService = {

  getList: async (prop) => {
    const result = await authAxiosClient.get('/user', {});
    return result?.data;
  },
  getById: async (id, prop) => {
    return {}
  },

}