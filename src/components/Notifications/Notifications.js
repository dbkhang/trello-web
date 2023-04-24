import React, { useState } from 'react'

import './Notifications.scss'
import NotificationChildren from './NotificationChildren'
import { dataNotifications } from 'actions/initialData'

function Notifications() {
  const [notifications, setNotifications] = useState(dataNotifications)

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
            />
          ))
          }
        </div>
      </div>
    </nav>
  )
}

export default Notifications
