import axios from 'axios'

export const fetchBoardDetails = async (data) => {
  const request = await axios.get('http://localhost:loadboard/', data, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request.data
}

export const fetchupdateBoard = async (data) => {
  const request = await axios.put('http://localhost:3000/', data, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request.data
}

export const createNewColumn = async (data) => {
  const request = await axios.post('http://localhost:3000/', data, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request.data
}

export const updateColumn = async (id, data) => {
  const request = await axios.put(`http://localhost:3000/${id}`, data, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request.data
}

export const APIupdateTitleBoard = async (data) => {
  const request = await axios.put('http://localhost:3000', data, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request.data
}

export const APIinviteMember = async (data) => {
  const request = await axios.post('http://localhost:3000', data, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request.data
}

export const APIshowMember = async (data) => {
  const request = await axios.post('http://localhost:3000', data, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request.data
}

export const APIdeleteMember = async (data) => {
  const request = await axios.delete('http://localhost:3000', data, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request.data
}

export const APIupdateColor = async (data) => {
  const request = await axios.post('http://localhost:3000', data, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request.data
}

export const updateColumnAPI = async (id, data) => {
  const req = {
    id: id,
    data: data
  }
  const request = await axios.post('http://localhost:8000/', req, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request.data
}

export const updateCardAPI = async (id, data) => {
  const req = {
    id: id,
    data: data
  }
  const request = await axios.post('http://localhost:8000/', req, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request.data
}