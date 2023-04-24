import React from 'react'

import './InfoMember.scss'

function InfoMember() {

  return (
    <div className="container-infomember">
      <div className="main-infomember">
        <div className="member-avatar">
          <img src="https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg"
            alt="avatar-user"
            title="trello-avatar"
          />
        </div>
        <div className="member-user">
          <span className="member-user-name">ten</span>
          <span className="member-user-email">email</span>
        </div>
      </div>
      <button className="btn-delete-member">Delete</button>
    </div>
  )
}

export default InfoMember
