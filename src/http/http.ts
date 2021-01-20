import axios, { AxiosRequestConfig } from 'axios';
// axios.defaults.baseURL = 'http://localhost:1111/mock/'
axios.defaults.baseURL = 'http://localhost:3000/'
axios.interceptors.request.use(config=>{
  
  return config
});
axios.interceptors.response.use(config=>{

  return config
})
export {axios,AxiosRequestConfig}