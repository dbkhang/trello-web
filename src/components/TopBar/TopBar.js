import React, { useState } from 'react'
// import { InputGroup, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './TopBar.scss'
import Search from 'components/Search/Search'
import Notifications from 'components/Notifications/Notifications'


function TopBar(props) {
  let listBoard = props.data.listBoard

  const [showNotifications, setShowNotifications] = useState(false)
  const [showListBoard, setShowListBoard] = useState(false)
  const [showActionsUser, setshowActionsUser] = useState(false)

  const handleShowNotifications = () => setShowNotifications(!showNotifications)

  const clickBoard = () => {
    // console.log(props.id)
  }

  return (
    <nav className="navbar-top">
      <div className="app-action">
        <div className="item home">
          <Link to="/" ><i className="fa fa-home" /></Link>
        </div>
        <div className="item boards" onClick={() => setShowListBoard(!showListBoard)}>
          <i className="fa fa-columns" />&nbsp;&nbsp;<strong>Boards</strong>
        </div>
        {showListBoard &&
          <nav className="list-board-wrapper">
            <div className="list-board-main">
              <div className="list-board-top">
                <h3>List board</h3>
              </div>
              <div className="list-board-container">
                {listBoard.map((item, index) => (
                  <Link
                    key={index}
                    className="list-board-show"
                    style={{ backgroundColor: item.color }}
                    onClick={clickBoard}
                    to="/board"
                  >{item.title}</Link>
                ))}
              </div>
            </div>
          </nav>
        }
        <Search />
      </div>
      <div className="user-actions">
        <div className="item notification" onClick={handleShowNotifications}>
          <i className="fa fa-bell-o" />
        </div>
        {showNotifications &&
          <Notifications />
        }
        <div className="item user-avatar" onClick={() => setshowActionsUser(!showActionsUser)}>
          <img
            src={props.data.img}
            alt="avatar-user"
            title={props.data.userName}
          />
        </div>
        {showActionsUser &&
          <div className="user-content">
            <div className="user-content-main">
              <div className="user-account">
                <div className="account-avatar">
                  <img src= {props.data.img}
                    alt="avatar-user"
                  />
                </div>
                <div className="account-user">
                  <span className="account-user-name">{ props.data.userName }</span>
                  <span className="account-user-email">{ props.data.userEmail }</span>
                </div>
              </div>
              <div className="user-content-actions">
                <Link to="/editaccount"><div>Sua thong tin ca nhan</div></Link>
                <Link to="/signin"><div>Sign out</div></Link>
              </div>
            </div>
          </div>
        }
      </div>
    </nav>
  )
}

export default TopBar
