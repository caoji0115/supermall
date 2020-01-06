import axios from 'axios'

export function  request(config){
  const instance = axios.create({
    //baseURL:'http://123.207.32.32:8000',
    baseURL:'http://123.207.32.32:8000/api/w1',
    timeout:5000
  });
  instance.interceptors.request.use(config =>{
    return config
  },error => {
      console.log(error);
    }
  );
  //响应拦截 返回data
  instance.interceptors.response.use(res =>{
    return res.data
  },error => {
      console.log(err);
    }
  );

  //发送真正的网络请求
  return instance(config)
}
