import axios from 'axios'

export const searchAPI = async (data) => {
  const request = await axios.get('http://localhost:3000', data, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request.data
}
