import React from 'react'

import './InfoMember.scss'

function InfoMemberNoBtn(props) {

  return (
    <div className="container-infomember-nobtn">
      <div className="main-infomember">
        <div className="member-avatar">
          <img src={props.image}
            alt="avatar-user"
            title="trello-avatar"
          />
        </div>
        <div className="member-user">
          <span className="member-user-name">{props.userName}</span>
          <span className="member-user-email">{props.email}</span>
        </div>
      </div>
    </div>
  )
}

export default InfoMemberNoBtn
