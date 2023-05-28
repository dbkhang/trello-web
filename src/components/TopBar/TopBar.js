import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeadlessTippy from '@tippyjs/react/headless'

import './TopBar.scss'
import Notifications from 'components/Notifications/Notifications'
import { useDebounce } from 'utilities/useDebounce'
import { searchAPI } from 'actions/APIcall/searchAPI'
import { APIgetNotifications } from 'actions/APIcall/APINotifications'


function TopBar(props) {
  const [listBoard, setListBoard] = useState([])
  const [showNotifications, setShowNotifications] = useState(false)
  const [showListBoard, setShowListBoard] = useState(false)
  const [showActionsUser, setshowActionsUser] = useState(false)
  const [dataNotifications, setDataNotifications] = useState()
  const [textSearch, setTextSearch] = useState()
  const debouncedSearch = useDebounce(textSearch, 1000)

  useEffect(() => {
    setListBoard(props.data)
  }, [showListBoard])

  const handleShowNotifications = () => {
    // /////////////
    if (!showNotifications) {
      APIgetNotifications().then(res => {
        if (res.status === 200) {
          let data = res.data
          setDataNotifications(data)
          setShowNotifications(!showNotifications)
        }
      }).catch(error => console.log(error))
    }

    // /////////////
    // setShowNotifications(!showNotifications)
  }

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
                  <Link to="/editaccount"><div>Sua thong tin ca nhan</div></Link>
                  <Link to="/signin"><div>Sign out</div></Link>
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
    </nav>
  )
}

export default TopBar