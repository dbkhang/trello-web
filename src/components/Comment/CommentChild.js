import React from 'react'

import './Comment.scss'

function CommentChild(props) {
  const { img, userName, comment } = props
  return (
    <div className="commentchild-main">
      <div className="commentchild-account">
        <img src={img} />
        <span>{userName}</span>
      </div>
      <div className="commentchild-content">
        <span style={{ whiteSpace: 'pre' }}>{comment} </span>
      </div>
    </div>
  )
}

export default CommentChild