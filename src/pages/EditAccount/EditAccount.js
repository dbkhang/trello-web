import React, { useState, useRef, useEffect } from 'react'

import './EditAccount.scss'
import TopBar from 'components/TopBar/TopBar'
import { dataUser } from 'actions/initialData'

function EditAccount() {
  const [data, setData] = useState(dataUser)

  const [nameUser, setNameUser]= useState(data.userName)
  const [image, setImage] = useState(data.img)
  const [fileName, setFileName] = useState('No file')
  const [showCheck, setShowCheck] = useState(false)
  const changeNameRef = useRef(null)
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errChangePassword, setErrChangePassword] = useState('')

  const chooseImg = () => {
    document.querySelector('.input-file').click()
  }

  const handleShowChange = () => {
    setShowCheck(!showCheck)
  }

  useEffect(() => {
    if (changeNameRef && changeNameRef.current) {
      changeNameRef.current.focus()
      changeNameRef.current.select()
    }
  }, [showCheck])

  const changePassword = () => {
    if (newPassword !== confirmPassword) {
      setErrChangePassword('mat khau moi khong dung')
    } else {
      setErrChangePassword('')
    }
  }

  const updateInformation = () => {
    let newData = { ...data }
    newData.img = image
    newData.userName = nameUser
    setData(newData)
    console.log(image)
  }

  return (
    <div>
      <TopBar data={data} />
      <div className="edit-container">
        <div className="edit-main">
          <h3>Edit Information</h3>
          <div className="edit-information-account">
            <div className="edit-information-account-main">
              <div className="change-avatar">
                <button onClick={chooseImg}>
                  {image ?
                    <img src={image} alt={fileName}/>
                    : <img src={data.img} alt="avatar-user" />
                  }
                </button>
                <input type="file"
                  accept="image/*"
                  className="input-file"
                  onChange={({ target: { files } }) => {
                    files[0] && setFileName(files[0].name)
                    if (files) {
                      setImage(URL.createObjectURL(files[0]))
                    }
                  }}
                  hidden
                />
              </div>
              <div className="change-name-user-container">
                {!showCheck &&
                  <div className="text-name-user" onClick={handleShowChange}>
                    {nameUser}
                    <i className="fa fa-pencil-square-o" />
                  </div>
                }
                {showCheck &&
                  <input
                    value={nameUser}
                    ref={changeNameRef}
                    onChange={(e) => setNameUser(e.target.value)}
                    onKeyDown={e => (e.key === 'Enter') && setShowCheck(!showCheck)}
                  />
                }
                <div className="email-user">{ data.userEmail }</div>
              </div>
            </div>
            <button className="btn-save-edit" onClick={updateInformation}>Save Edit</button>
          </div>

          <h3>Edit Pasword</h3>
          <div className="change-password">
            <div>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label>New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div>
              <label>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="err-change-password">{ errChangePassword }</div>
            <button onClick={changePassword}>Edit Password</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default EditAccount