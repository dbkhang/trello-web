import React, { useState, useEffect } from 'react'

import './Comment.scss'
import CommentChild from './CommentChild'
import { dataComment } from 'actions/initialData'

function Comment() {
//   const [heightTextarea, setHeightTextarea] = useState('51px')

  const [data, setData] = useState(dataComment)
  const textarea = document.querySelector('textarea')
  const [textComment, setTextComment] = useState('')
  const [showBtnComment, setShowBtnComment] = useState(false)

  useEffect(() => {
    if (textComment !== '') {
      setShowBtnComment(true)
    } else {
      setShowBtnComment(false)
    }
  }, [textComment])


  const handleHeightTextarea = (e) => {
    setTextComment(e.target.value)
    textarea.style.height = '51px'
    let sc = e.target.scrollHeight
    textarea.style.height = `${sc}px`
  }

  const saveComment = () => {
    let newComment = data
    let addComment = {
      img: 'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg',
      userName: 'aaa',
      comment: textComment
    }
    newComment.push(addComment)
    setData(newComment)
    setTextComment('')
    textarea.style.height = '51px'
  }

  return (
    <div className="wrap-comment">
      <h3>Comment</h3>
      <div className="action-comment">
        <textarea
          className="textarea"
          value={textComment}
          //   style={{ height: heightTextarea }}
          placeholder='Comment'
          required
          onChange={handleHeightTextarea}
        //   setHeightTextarea(`${e.target.scrollHeight}px`)
        >
        </textarea>
        {showBtnComment &&
            <button className="btn-comment" onClick={saveComment}>Save</button>
        }
      </div>
      <div>
        {data.map((item, index) => (
          <CommentChild
            key={index}
            img={item.img}
            userName={item.userName}
            comment={item.comment}
          />
        ))}
      </div>
    </div>
  )
}

export default Comment