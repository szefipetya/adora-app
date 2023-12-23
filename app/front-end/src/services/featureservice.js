import {useAuth} from 'layouts/authentication/context/AuthContext';
import { config } from '../Constants'
import axios from 'axios'

const instance = axios.create({
  baseURL: config.url.API_BASE_URL
})

// -- Helper functions

function basicAuth(user) {
  return `Basic ${user.authdata}`
}

function getUserInfo() {
      if(!useAuth().getUser()) return null;
        if(localStorage.getItem("userInfo")){
          return JSON.parse(localStorage.getItem("userInfo"))
      }else{ 
          let userInfo = null;
          const url = config.url.API_BASE_URL+"/api/users/me"
          let data = httpGet(url)
              //console.log("data",data)        
              localStorage.setItem("userInfo",JSON.stringify(data));
          return data;
      }     
}
function getTags() {  
  if(localStorage.getItem("tags")){
    return JSON.parse(localStorage.getItem("tags"))
  }else{ 
    const url = config.url.API_BASE_URL+"/api/tags"
    let data = httpGet(url)
      // console.log("data",data)        
        localStorage.setItem("tags",JSON.stringify(data));
    return data;           
  }   
}    


function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.setRequestHeader('Authorization',basicAuth(useAuth().getUser()))
  xmlHttp.send(null);
  return JSON.parse(xmlHttp.responseText);
}

export {getUserInfo,httpGet,getTags}








