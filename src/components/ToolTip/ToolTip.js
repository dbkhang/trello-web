/* eslint-disable indent */
import React from 'react'

import './ToolTip.scss'

function ToolTip(props) {

  const handleClickClose = () => {
    props.handleClose()
  }

  return (
    <div className='toast-message'>
      <div className="toast-message__main">
        <div className="toast-message__left">
          {props.type?
            <i className="fa fa-check toast-message__icon--success" /> :
            <i className="fa fa-times toast-message__icon--false" />
          }

        </div>
        <div className="toast-message__right">
          <div className="toast-message__right-1">
              <span> {props.message} </span>
              {/* <span className="text__color">Thành công!</span> */}
          </div>
          <div className="toast-message__right-2">
            <i className="fa fa-times toast-message__icon--x"
              onClick={handleClickClose}
            ></i>
          </div>
        </div>
      </div>

      {props.type?
        <div className='toast-message__bottom--success'></div> :
        <div className='toast-message__bottom--false'></div>
      }
    </div>
  )
}

export default ToolTip