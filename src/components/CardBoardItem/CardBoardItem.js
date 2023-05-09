import React from 'react'
import { Link } from 'react-router-dom'

import './CardBoardItem.scss'

function CardBoardItem(props) {
  const a = props.title

  return (
    <Link
      to="/board"
      className="cardboard"
      style={{ backgroundColor: props.color }}
      state={{ id: props.id }}
    >
      <div className="title-cardboard"> {a} </div>
    </Link>
  )
}
export default CardBoardItem