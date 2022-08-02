const baseUrl = process.env.API || "http://localhost:8000";
export const api = `${baseUrl}/api/v1`;

export const userUrls = `${api}/user`;
export const productUrls = `${api}/product`;

export const userEndPoints = {
  register: `${userUrls}/register`,
  login: `${userUrls}/login`,
};
