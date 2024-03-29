import axios from 'axios'

export const createNewCard = async (data) => {
  const request = await axios.post('http://localhost:3000/', data, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request
}

export const updateTitleColumn = async (data) => {
  const request = await axios.put('http://localhost:3000/', data, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request
}

export const removeColumnAPI = async (data) => {
  const request = await axios.delete('http://localhost:8000/', data, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request
}

