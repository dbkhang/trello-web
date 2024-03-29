import React from 'react'

import './Card.scss'

function Card(props) {
  const { card, dataCardInfo } = props
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

  const colorDate = () => {
    if (card.complete) {
      return {
        background: '#dffcf0',
        color: '#4fcc25'
      }
    } else {
      if (card.overTime) {
        return {
          background: 'red',
          color: 'white'
        }
      } else {
        return {
          background: '#f8f8f8',
          color: '#000'
        }
      }
    }
    
    
    // let a = card.status
    // if ( a === 'over time') {
    //   return {
    //     background: 'red',
    //     color: 'white'
    //   }
    // } else {
    //   if ( a === 'complete') {
    //     return {
    //       background: '#dffcf0',
    //       color: '#4fcc25'
    //     }
    //   } else {
    //     return {
    //       background: '#f8f8f8',
    //       color: '#000'
    //     }
    //   }
    // }
  }
  return (
    <>
      <div className="card-item" onClick={() => dataCardInfo(card)} >
        <div className="card-member">
          <img src={card.imageUsername}
            alt="avatar-user"
            title="trello-avatar"
          />
          <span>{card.userName}</span>
        </div>
        <div className="header-card">
          <div className="card_title">{card.title}</div>
        </div>
        <div className="card_footer">
          {card.date && (
            <p className="card_footer_item" style={{ backgroundColor: colorDate().background, color: colorDate().color }}>
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
      </div>
    </>
  )
}

export default Card