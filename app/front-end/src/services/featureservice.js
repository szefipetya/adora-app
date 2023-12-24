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
  if(!useAuth().getUser()) return null;
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

function getDeadlines(){
  if(localStorage.getItem("deadlines")){
    return JSON.parse(localStorage.getItem("deadlines"))
  }else{ 
    const url = config.url.API_BASE_URL+"/api/deadlines"
    let data = httpGet(url,false)
      // console.log("data",data)        
        localStorage.setItem("deadlines",JSON.stringify(data));
    return data;           
  }   
}

function httpGet(theUrl,autenticated=true) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  if(autenticated)
    xmlHttp.setRequestHeader('Authorization',basicAuth(useAuth().getUser()))
  xmlHttp.send(null);
  return JSON.parse(xmlHttp.responseText);
}

function emptyCache(){
  localStorage.removeItem("userInfo")
  localStorage.removeItem("tags")
  localStorage.removeItem("deadlines")
  return false;
}

export {getUserInfo,httpGet,getTags,getDeadlines,emptyCache}








