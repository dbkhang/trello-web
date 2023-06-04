import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './Notifications.scss'
import { APIupdateNotifications } from 'actions/APIcall/APINotifications'

function NotificationChildren(props) {
  const [showBtn, setShowBtn] = useState(props.type)

  const handelShowBtnYes = () => {
    const data = {
      id: props.id,
      type: true
    }
    // API
    APIupdateNotifications(data).then(res => {
      const data = res.response
      if (data.status === 200) {
        setShowBtn(true)
        props.addBoard(data.data)
      }
    }).catch(error => {
      if (error.response.status !== 200) {
        toast.error('Thêm bảng thất bại!', {
          position: toast.POSITION.TOP_RIGHT
        })
      }
    })

  }
  const handelShowBtnNo = () => {
    const data = {
      id: props.id,
      type: false
    }
    // API
    APIupdateNotifications(data).then(res => {
      const data = res.response
      if (data.status === 200) {
        setShowBtn(true)
      }
    }).catch(error => {
      if (error.response.status !== 200) {
        toast.error('Từ trối thất bại!', {
          position: toast.POSITION.TOP_RIGHT
        })
      }
    })
    // //////////
  }

  return (
    <div className="inboxChildren-wrapper">
      <div className="link" >
        <div className="contentChildren">
          {props.content}
        </div>
        <div className="contentChildren">
          {props.type}
        </div>
      </div>
      {!showBtn &&
        <div className="btn-content">
          <button className="btn-yes" onClick={handelShowBtnYes}>Đồng ý</button>
          <button className="btn-no" onClick={handelShowBtnNo}>Từ chối</button>
        </div>
      }
    </div>
  )
}

export default NotificationChildren