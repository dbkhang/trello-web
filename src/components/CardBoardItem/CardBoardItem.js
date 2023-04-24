import React from 'react'
import { Link } from 'react-router-dom'

import './CardBoardItem.scss'

function CardBoardItem(props) {
  const a = props.title

  const clickBoard = () => {
    // console.log(props.id)
  }
  return (
    <Link
      to="/board"
      className="cardboard"
      style={{ backgroundColor: props.color }}
      onClick={clickBoard}
    >
      <div className="title-cardboard"> {a} </div>
    </Link>
  )
}
export default CardBoardItem