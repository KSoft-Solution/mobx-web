import http from "../config/axios";
import * as url from '../config/urlConfig'

// Auth endpoints
export const registerUser = async (body) => {
  const response = await http.post(url.userEndPoints.register,{
    body
  })
  console.log(response,'response')
};
