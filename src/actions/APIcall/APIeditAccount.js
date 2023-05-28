import axios from 'axios'

export const APIupdatePassword = async (data) => {
  const request = await axios.put('http://localhost:3000', data, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request
}

export const APIupdateInformation = async (data) => {
  const request = await axios.put('http://localhost:3000', data, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request
}