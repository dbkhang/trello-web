import React, { useState } from 'react'

import './Card.scss'
import CardInfo from '../CardInfo/CardInfo'

function Card(props) {
  const { card, updateCard } = props
  const [showCardInfo, setShowCardInfo] = useState(false)
  const formatDate = (value) => {
    if (!value) return ''
    const date = new Date(value)
    if (!date) return ''

    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Aprl',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ]

    const day = date.getDate()
    const month = months[date.getMonth()]
    return day + ' ' + month
  }

  const colorCard = () => {
    let a = card.tasks?.filter((item) => item.completed)?.length
    let b = card.tasks?.length
    if ( a == b) {
      return {
        background: '#dffcf0',
        color: '#4fcc25'
      }
    } else {
      return {
        background: '#f8f8f8',
        color: '#000'
      }
    }
  }

  return (
    <>
      {showCardInfo && (
        <CardInfo
          onClose={() => setShowCardInfo(false)}
          cardInfos={card}
          updateCard={updateCard}
        />
      )}
      <div
        className="card-item"
        onClick={() => setShowCardInfo(true)}
      >
        {/* {card.cover &&
          <img
            src={card.cover}
            className='card-cover'
            alt=""
            onMouseDown={e => e.preventDefault()}
          />
        } */}
        <div className="card_title">{card.title}</div>
        <div className="card_top">
          <div className="card_top_labels">
            {card.labels?.map((item, index) => (
              <label key={index} style={{ backgroundColor: item.colors }}>
                {item.title}
              </label>
            ))}
          </div>
        </div>
        <div className="card_footer">
          {card.date && (
            <p className="card_footer_item">
              {/* <Clock className="card_footer_icon" /> */}
              <i className="fa fa-clock-o" aria-hidden="true" />
              {formatDate(card.date)}
            </p>
          )}
          {card.tasks && card.tasks?.length > 0 && (
            <p className="card_footer_item" style={{ backgroundColor: colorCard().background, color: colorCard().color }}>
              {/* <CheckSquare className="card_footer_icon" /> */}
              {card.tasks?.filter((item) => item.completed)?.length}/{card.tasks?.length}
            </p>
          )}
        </div>
        {/* {card.title} */}
      </div>
    </>
  )
}

export default Card