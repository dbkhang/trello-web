import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeadlessTippy from '@tippyjs/react/headless'
import { ToastContainer } from 'react-toastify'

import './TopBar.scss'
import Notifications from 'components/Notifications/Notifications'
import { useDebounce } from 'utilities/useDebounce'
import { searchAPI } from 'actions/APIcall/searchAPI'
import { HubConnectionBuilder } from '@microsoft/signalr'
import { APIgetNotifications } from 'actions/APIcall/APINotifications'

let dataAPINotifications = null

const connection = new HubConnectionBuilder()
  .withUrl('http://localhost:5000/notificationHub')
  .withAutomaticReconnect()
  .build()

connection.start().catch(error => console.error(error))

connection.on('ReceiveNotification', message => {
  dataAPINotifications = message
})

function TopBar(props) {
  const [listBoard, setListBoard] = useState([])
  const [showNotifications, setShowNotifications] = useState(false)
  const [showListBoard, setShowListBoard] = useState(false)
  const [showActionsUser, setshowActionsUser] = useState(false)
  const [dataNotifications, setDataNotifications] = useState()
  const [textSearch, setTextSearch] = useState()
  const debouncedSearch = useDebounce(textSearch, 1000)
  const [showIconNotification, setShowIconNotification] = useState(false)

  useEffect(() => {
    APIgetNotifications().then(res => {
      if (res.status === 200) {
        let data = res.data
        setDataNotifications(data)
      }
    }).catch(error => console.log(error))
  }, [])

  useEffect(() => {
    if (dataAPINotifications !== null) {
      setShowIconNotification(true)
    }

    if (dataAPINotifications === props.user.userId) {
      if (dataAPINotifications !== null) {
        setDataNotifications(dataAPINotifications)
        setShowIconNotification(true)
      }
    }
  }, [dataAPINotifications])

  const handleShowNotifications = () => {
    setShowNotifications(!showNotifications)
    setShowIconNotification(false)
  }

  useEffect(() => {
    setListBoard(props.data)
  }, [ showListBoard ])

  const searchBoard = (e) => {
    setTextSearch(e.target.value)
    // const searchText = e.target.value
  }

  useEffect(() => {
    if (debouncedSearch) {
      searchAPI(debouncedSearch).then(res => {
        if (res.status === 200) {
          let data = res.data
          setListBoard(data)
        }
      }).catch(error => console.log(error))
    }
  }, [ debouncedSearch ])

  return (
    <nav className="navbar-top">
      <div className="app-action">
        <div className="item home">
          <Link to="/" ><i className="fa fa-home" /></Link>
        </div>
        <HeadlessTippy
          interactive
          visible={ showListBoard }
          render={attrs => (
            <nav className="list-board-wrapper" tabIndex="-1" {...attrs}>
              <div className="list-board-main">
                <div className="list-board-top">
                  <h3>Danh sách bảng</h3>
                  <div className="search">
                    <input
                      className="input-search"
                      onChange={searchBoard}
                    />
                  </div>
                </div>
                <div className="list-board-container">
                  {listBoard.map((item, index) => (
                    <Link
                      key={index}
                      className="list-board-show"
                      style={{ backgroundColor: item.color }}
                      to="/board"
                      state={{ id: item.id }}
                    >{item.title}</Link>
                  ))}
                </div>
              </div>
            </nav>
          )}
          onClickOutside={() => setShowListBoard(false)}
        >
          <div className="item boards" onClick={() => setShowListBoard(!showListBoard)}>
            <i className="fa fa-columns" />&nbsp;&nbsp;<strong>Bảng</strong>
          </div>
        </HeadlessTippy>
      </div>
      <div className="user-actions">
        <HeadlessTippy
          interactive
          visible={ showNotifications }
          render={attrs => (
            <Notifications
              tabIndex="-1" {...attrs}
              addBoard={props.addBoard}
              data={dataNotifications}
            />
          )}
          onClickOutside={() => setShowNotifications(false)}
        >
          <div className="item notification" onClick={handleShowNotifications}>
            <i className="fa fa-bell-o" />
            { showIconNotification &&
              <div className="icon__have-notification"></div>
            }
          </div>
        </HeadlessTippy>
        <HeadlessTippy
          interactive
          visible={ showActionsUser }
          render={attrs => (
            <div className="user-content" tabIndex="-1" {...attrs}>
              <div className="user-content-main">
                <div className="user-account">
                  <div className="account-avatar">
                    <img src= {props.user.imageUser}
                      alt="avatar-user"
                    />
                  </div>
                  <div className="account-user">
                    <span className="account-user-name">{ props.user.userName }</span>
                    <span className="account-user-email">{ props.user.userEmail }</span>
                  </div>
                </div>
                <div className="user-content-actions">
                  <Link to="/editaccount"><div>Sửa thông tin cá nhân</div></Link>
                  <Link to="/signin"><div>Đăng xuất</div></Link>
                </div>
              </div>
            </div>
          )}
          onClickOutside={() => setshowActionsUser(false)}
        >
          <div className="item user-avatar" onClick={() => setshowActionsUser(!showActionsUser)}>
            <img
              src={props.user.imageUser}
              alt="avatar-user"
              title={props.user.userName}
            />
          </div>
        </HeadlessTippy>
      </div>
      <ToastContainer />
    </nav>
  )
}

export default TopBar