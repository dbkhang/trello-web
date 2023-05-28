import axios from 'axios'

export const fetchDataUser = async () => {
  const request = await axios.post('http://localhost:3000', '', {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request
}

export const fetchDataListBoard = async () => {
  const request = await axios.post('http://localhost:3000', '', {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request
}

export const createNewBoard = async (data) => {
  const request = await axios.post('http://localhost:3000', data, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request
}

