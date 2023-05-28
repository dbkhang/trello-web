import axios from 'axios'

export const APIupdateCard = async (data) => {
  const request = await axios.post('http://localhost:3000', data, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request
}

export const APIupdateTitle = async (titleCard) => {
  const request = await axios.post('http://localhost:3000', titleCard, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request
}

export const APIupdateDescription = async (newDescription) => {
  const request = await axios.post('http://localhost:3000', newDescription, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request
}

export const APIaddTask = async (task) => {
  const request = await axios.post('http://localhost:3000', task, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request
}

export const APIremoveTask = async (data) => {
  const request = await axios.delete('http://localhost:3000', data, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request
}

export const APIupdateTask = async (data) => {
  const request = await axios.put('http://localhost:3000', data, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request
}

export const APIupdateDate = async (data) => {
  const request = await axios.post('http://localhost:3000', data, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request
}

export const APIcheckDate = async (data) => {
  const request = await axios.post('http://localhost:3000', data, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request
}

export const APIinviteMemberCard = async (data) => {
  const request = await axios.post('http://localhost:3000', data, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request
}

export const APIigetAllComment = async (data) => {
  const request = await axios.post('http://localhost:3000', data, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request
}

export const APIicreateComment = async (data) => {
  const request = await axios.post('http://localhost:3000', data, {
    headers: {
      'Authorization': localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    }
  })
  return request
}
