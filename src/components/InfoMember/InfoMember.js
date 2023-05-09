import React from 'react'

import './InfoMember.scss'

function InfoMember(props) {
  const { id, userName, Email, image, deleteMember } = props

  const handleDeleteMember = () => {
    deleteMember(id)
  }

  return (
    <div className="container-infomember">
      <div className="main-infomember">
        <div className="member-avatar">
          <img src={image}
            alt="avatar-user"
            title="trello-avatar"
          />
        </div>
        <div className="member-user">
          <span className="member-user-name"> { userName } </span>
          <span className="member-user-email"> { Email } </span>
        </div>
      </div>
      <button className="btn-delete-member"
        onClick={handleDeleteMember}
      >Delete</button>
    </div>
  )
}

export default InfoMember
