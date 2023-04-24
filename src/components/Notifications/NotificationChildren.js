import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function NotificationChildren(props) {
  const [showBtn, setShowBtn] = useState(props.type)

  const handelShowBtnYes = () => {
    setShowBtn(false)
  }
  const handelShowBtnNo = () => {
    setShowBtn(false)
  }
  return (
    <div className="inboxChildren-wrapper">
      <NavLink className="link" to="/">
        <div className="contentChildren">
          {props.content}
        </div>
      </NavLink>
      {showBtn &&
        <div className="btn-content">
          <button className="btn-yes" onClick={handelShowBtnYes}>YES</button>
          <button className="btn-no" onClick={handelShowBtnNo}>NO</button>
        </div>
      }
    </div>
  )
}

export default NotificationChildren