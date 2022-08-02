import axios from "axios";
import { api } from "./urlConfig";

const axiosInstance = axios.create({
  baseURL: api,
  headers: {
    "Content-type": "application/json",
  },
});

axiosInstance.interceptors.request.use((req) => {
  return req;
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

function get(
  url,
  { params = {}, accessToken = false, responseType = "json", headers = {} } = {}
) {
  const authHeaders = {};

  if (accessToken) {
    authHeaders["Authorization"] = `Bearer`;
  }

  return axiosInstance({
    url,
    params,
    responseType,
    method: "get",
    headers: { ...authHeaders, ...headers },
  }).then((response) => response);
}

function post(
  url,
  { params = {}, body = {}, accessToken = false, headers = {} } = {}
) {
  const authHeaders = {};

  if (accessToken) {
    authHeaders["Authorization"] = `Bearer`;
  }

  return axiosInstance({
    url,
    params,
    data: body,
    method: "post",
    headers: { ...authHeaders, ...headers },
  }).then((response) => response);
}

function put(
  url,
  { params = {}, body = {}, accessToken = false, headers = {} } = {}
) {
  const authHeaders = {};

  if (accessToken) {
    authHeaders["Authorization"] = `Bearer`;
  }

  return axiosInstance({
    url,
    params,
    data: body,
    method: "put",
    headers: { ...authHeaders, ...headers },
  }).then((response) => response);
}

function remove(url, { params = {}, accessToken = false, headers = {} } = {}) {
  const authHeaders = {};

  if (accessToken) {
    authHeaders["Authorization"] = `Bearer`;
  }

  return axiosInstance({
    url,
    params,
    method: "delete",
    headers: { ...authHeaders, ...headers },
  }).then((response) => response);
}

const http = {
  ...axiosInstance,
  get,
  post,
  put,
  remove,
};

export default http;
