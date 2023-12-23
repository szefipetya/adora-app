import {useAuth} from 'layouts/authentication/context/AuthContext';
import { config } from '../Constants'
import axios from 'axios'


class ApiService{
    static  getUserInfo() {
        if(!useAuth().getUser()) return null;
        if(localStorage.getItem("userInfo")){
            return localStorage.getItem("userInfo");
        }else{
            let userInfo = null;
            const url = config.url.API_BASE_URL+"/api/users/me"
            let userInfoPromise = instance.get(url, {
            headers: { 'Authorization': basicAuth(useAuth().getUser()) }
            })
            userInfoPromise.then(data=>{
                console.log("data",data)
                userInfo=data.data
                localStorage.setItem("userInfo",userInfo);
            })
            
            return userInfo;
        }     
  }
}


export {ApiService}







// -- Axios

const instance = axios.create({
  baseURL: config.url.API_BASE_URL
})

// -- Helper functions

function basicAuth(user) {
  return `Basic ${user.authdata}`
}