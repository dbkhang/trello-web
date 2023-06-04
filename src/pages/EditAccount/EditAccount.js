import React, { useState, useRef, useEffect } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './EditAccount.scss'
import TopBar from 'components/TopBar/TopBar'
import { fetchDataUser, fetchDataListBoard } from 'actions/APIcall/APIPageHome'
import { APIupdatePassword, APIupdateInformation } from 'actions/APIcall/APIeditAccount'
// import { dataUser } from 'actions/initialData'

function EditAccount() {
  // const [data, setData] = useState(dataUser)
  const [userData, setUserData] = useState({})
  const [userListBoard, setUserListBoard] = useState([])
  const [nameUser, setNameUser]= useState()
  const [image, setImage] = useState()
  const [fileName, setFileName] = useState('No file')
  const [showCheck, setShowCheck] = useState(false)
  const changeNameRef = useRef(null)
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errChangePassword, setErrChangePassword] = useState('')


  useEffect(() => {
    fetchDataUser().then(res => {
      if (res.status === 200) {
        let data = res.data
        setUserData(data)
        setNameUser(abc.userName)
      }
      // setBoard(data.listBoard)
    }).catch(error => console.log(error))

    fetchDataListBoard().then(res => {
      if (res.status === 200) {
        let data = res.data
        setUserListBoard(data)
      }
      // setBoard(data.listBoard)
    }).catch(error => console.log(error))


    const abc = {
      imageUser: 'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg',
      userName: 'aaaa',
      userEmail: 'bbbbb'
    }
    const ccc= [
      {
        id: '1',
        title: 'board 1',
        color: '#333'
      },
      {
        id: '2',
        title: 'board 2',
        color: '#133'
      }
    ]
    setUserData(abc)
    setNameUser(abc.userName)
    setUserListBoard(ccc)
  }, [])

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
    if (newPassword === '' || confirmPassword === '' || password === '') {
      setErrChangePassword('Hãy điền đầy đủ thông tin')
      return
    }
    if (newPassword !== confirmPassword) {
      setErrChangePassword('Mật Khẩu mới chưa trùng')
      return
    } else {
      setErrChangePassword('')
    }
    // API
    const dataPass = {
      password: password,
      newPassword: newPassword
    }
    APIupdatePassword(dataPass).then(res => {
      if (res.status === 200) {
        toast.success('Đổi mật khẩu thành công!', {
          position: toast.POSITION.TOP_RIGHT
        })
      }
    }).catch(error => {
      if (error.response.status !== 200) {
        toast.success('Đổi mật khẩu thất bại!', {
          position: toast.POSITION.TOP_RIGHT
        })
      }
    })
  }

  const updateInformation = () => {

    // ///////////////////
    let newData = { ...userData }
    newData.imageUser = image
    newData.userName = nameUser
    setUserData(newData)

    // API
    const newInfo = {
      userName: nameUser,
      image: image
    }
    APIupdateInformation(newInfo).then(res => {
      if (res.status === 200) {
        let data = res.data
        let newData = { ...data }
        newData.imageUser = data.imageUser
        newData.userName = data.userName
        setUserData(newData)
      }
    }).catch(error => {
      if (error.response.status !== 200) {
        toast.error('Đổi thông tin thất bại!', {
          position: toast.POSITION.TOP_RIGHT
        })
      }
    })
  }

  return (
    <div>
      {/* <ToastContainer /> */}
      <TopBar
        user={userData}
        data={userListBoard}
      />
      <div className="edit-container">
        <div className="edit-main">
          <h3>Thay đổi thông tin</h3>
          <div className="edit-information-account">
            <div className="edit-information-account-main">
              <div className="change-avatar">
                <button onClick={chooseImg}>
                  {image ?
                    <img src={image} alt={fileName}/>
                    : <img src={userData.imageUser} alt="avatar-user" />
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
                <div className="email-user">{ userData.userEmail }</div>
              </div>
            </div>
            <button className="btn-save-edit" onClick={updateInformation}>Lưu thay đổi</button>
          </div>

          <h3>Đổi mật khẩu</h3>
          <div className="change-password">
            <div>
              <label>Mật khẩu cũ</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label>Mật khẩu mới</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div>
              <label>Nhập lại mật khẩu</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="err-change-password">{ errChangePassword }</div>
            <button onClick={changePassword}>Thay đổi mật khẩu</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default EditAccount