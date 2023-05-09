import axios from 'axios'

export const createNewCard = async (data) => {
  const request = await axios.post('http://localhost:3000/', data, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request.data
}

export const updateTitleColumn = async (id, data) => {
  const request = await axios.put('http://localhost:3000/', data, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request.data
}

export const removeColumnAPI = async (data) => {
  const request = await axios.delete('http://localhost:8000/', data, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request.data
}