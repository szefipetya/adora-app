import axios from 'axios'
import { config } from '../../../Constants'

export const ArticleApi = {
  authenticate,
  signup,
  numberOfUsers,
  numberOfArticles,
  getUsers,
  deleteUser,
  getArticles,
  deleteArticle,
  addArticle
}

function authenticate(username, password) {
  return instance.post('/auth/authenticate', { username, password }, {
    headers: { 'Content-type': 'application/json' }
  })
}

function signup(user) {
  return instance.post('/auth/signup', user, {
    headers: { 'Content-type': 'application/json' }
  })
}

function numberOfUsers() {
  return instance.get('/public/numberOfUsers')
}

function numberOfArticles() {
  return instance.get('/public/numberOfArticles')
}

function getUsers(user, username) {
  const url = username ? `/api/users/${username}` : '/api/users'
  return instance.get(url, {
    headers: { 'Authorization': basicAuth(user) }
  })
}

function deleteUser(user, username) {
  return instance.delete(`/api/users/${username}`, {
    headers: { 'Authorization': basicAuth(user) }
  })
}

function getArticles(user, text) {
  const url = text ? `/api/articles?text=${text}` : '/api/articles'
  return instance.get(url, {
    headers: { 'Authorization': basicAuth(user) }
  })
}

function deleteArticle(user, isbn) {
  return instance.delete(`/api/articles/${isbn}`, {
    headers: { 'Authorization': basicAuth(user) }
  })
}

function addArticle(user, article) {
  return instance.post('/api/articles', article, {
    headers: {
      'Content-type': 'application/json',
      'Authorization': basicAuth(user)
    }
  })
}

// -- Axios

const instance = axios.create({
  baseURL: config.url.API_BASE_URL
})

// -- Helper functions

function basicAuth(user) {
  return `Basic ${user.authdata}`
}