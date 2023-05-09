import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
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
    // APIupdateNotifications(data).then(data => {
    //   setShowBtn(true)
    // }).catch(error => console.log(error))
    // /////////////////
    const databoard = {
      id: '5',
      title: 'them 1',
      color: '#333'
    }
    setShowBtn(true)
    props.addBoard(databoard)

  }
  const handelShowBtnNo = () => {
    const data = {
      id: props.id,
      type: false
    }
    // API
    APIupdateNotifications(data).then(data => {
      setShowBtn(true)
    }).catch(error => console.log(error))
    // //////////
    setShowBtn(true)
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
          <button className="btn-yes" onClick={handelShowBtnYes}>YES</button>
          <button className="btn-no" onClick={handelShowBtnNo}>NO</button>
        </div>
      }
    </div>
  )
}

export default NotificationChildren