import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'

import './Notifications.scss'
import ToolTip from 'components/ToolTip/ToolTip'
import { APIupdateNotifications } from 'actions/APIcall/APINotifications'

function NotificationChildren(props) {
  const [showBtn, setShowBtn] = useState(props.type)
  const [showToolTip, setShowToolTip] = useState(false)
  const [textToolTip, setTextToolTip] = useState('')
  const [typeToolTip, setTypeToolTip] = useState()

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
        setTextToolTip('Thêm bảng thành công')
        setTypeToolTip(true)
        setShowToolTip(true)
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
        setTextToolTip('Thêm bảng thất bại')
        setTypeToolTip(false)
        setShowToolTip(true)
      }
    })
    // //////////
  }

  const handleClose = () => {
    setShowToolTip(false)
  }

  return (
    <div className="inboxChildren-wrapper">
      {showToolTip &&
        <ToolTip
          type={typeToolTip}
          message={ textToolTip }
          handleClose={handleClose}
        />
      }
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
          <button className="btn-yes" onClick={handelShowBtnYes}>YES</button>
          <button className="btn-no" onClick={handelShowBtnNo}>NO</button>
        </div>
      }
    </div>
  )
}

export default NotificationChildren