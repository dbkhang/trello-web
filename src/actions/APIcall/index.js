import axios from 'axios'

export const fetchBoardDetails = async (id) => {
  const request = await axios.get(`http://localhost:3000/${id}`)
  return request.data
}

export const createNewColumn = async (data) => {
  const request = await axios.post('http://localhost:3000/', data)
  return request.data
}

export const updateColumn = async (id, data) => {
  const request = await axios.put(`http://localhost:3000/${id}`, data)
  return request.data
}

export const createNewCard = async (data) => {
  const request = await axios.post('http://localhost:3000/', data)
  return request.data
}