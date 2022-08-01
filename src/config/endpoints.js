import { userUrls } from "./urlConfig";
import * as http from "./axios";

// Auth endpoints
export const registerUser = async (body) => {
  // const { data } = await http.post(config.apiEndPoint.user.forgotPassword, {
  //   body,
  // });

  // return data;
  const response = await http.post(`${userUrls}/register`,{
    body
  })
  console.log(response,'response')
};
