import axios from 'axios'

export const fetchSignIn = async (data) => {
  const request = await axios.post('http://localhost:3000', data, {
    headers: { 'Content-Type': 'application/json' }
    // withCredentials: true
  })
  return request
}

export const fetchSignUp = async (data) => {
  const request = await axios.post('http://localhost:3000', data, {
    headers: { 'Content-Type': 'application/json' }
    // withCredentials: true
  })
  return request
}

export const fetchParam = async (data) => {
  const request = await axios.post('http://localhost:3000', data, {
    headers: { 'Content-Type': 'application/json' }
    // withCredentials: true
  })
  return request
}
