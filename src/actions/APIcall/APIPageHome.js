import axios from 'axios'

export const fetchDataHome = async () => {
  const request = await axios.get('http://localhost:3000', {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request.data
}

export const createNewBoard = async (data) => {
  const request = await axios.get('http://localhost:3000', data, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request.data
}

