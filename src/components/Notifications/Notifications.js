import React, { useState, useEffect } from 'react'

import './Notifications.scss'
import NotificationChildren from './NotificationChildren'
import { APIgetNotifications } from 'actions/APIcall/APINotifications'
import { dataNotifications } from 'actions/initialData'

function Notifications(props) {
  const [notifications, setNotifications] = useState(dataNotifications)

  useEffect(() => {
    APIgetNotifications().then(data => {
      // setNotifications(data)
    }).catch(error => console.log(error))
  }, [])

  return (
    <nav className="notifications-wrapper">
      <div className="notifications-arrow-top"></div>
      <div className="notifications-main">
        <div className="notifications-top">
          <h4>Notifications</h4>
        </div>
        <div className="notifications-container">
          {notifications.map((item, index) => (
            <NotificationChildren
              key={index}
              content={item.content}
              type={item.type}
              id={item.id}
              addBoard={props.addBoard}
            />
          ))
          }
        </div>
      </div>
    </nav>
  )
}

export default Notifications
