import Cookies from 'js-cookie'
import axios from 'axios';
import store from 'store/index';
import router from 'router'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API 
});

service.interceptors.request.use(
  config => {
    store.commit('LOADING_FLAG',true);
    return config;
  },
  error => {
    store.commit('LOADING_FLAG',false);
    console.log('request-->err----',error);
    Promise.reject(error);
  }
)

service.interceptors.response.use(
  response => {
    store.commit('LOADING_FLAG',false);
    return  response;
  },
  error => {
    let err = error.response;
    store.commit('LOADING_FLAG',false);
    console.log('response-->err----',error);
    return Promise.reject(error);
  }
)

export default service;