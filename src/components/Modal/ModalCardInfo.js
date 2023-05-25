import React from 'react'

import './Modal.scss'

function ModalCardInfo(props) {
  return (
    <div
      className="modal"
      onClick={() => (props.onClose ? props.onClose() : '')}
    >
      <div
        className="modal_content custom-scroll"
        onClick={(event) => event.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
  )
}

export default ModalCardInfo
