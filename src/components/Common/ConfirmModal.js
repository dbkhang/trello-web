import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import HTMLReactParser from 'html-react-parser'
import { MODAL_ACATION_CLOSE, MODAL_ACATION_CONFIRM } from 'utilities/constants'

function ConfirmModal(props) {
  const { title, content, show, onAction } = props

  return (
    <Modal
      show={show}
      onHide={() => onAction(MODAL_ACATION_CLOSE)}
      backdrop="static"
      keyboard={false}
      animation={false}
    >
      <Modal.Header closeButton>
        <Modal.Title className="h5">{HTMLReactParser(title)}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{HTMLReactParser(content)} </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => onAction(MODAL_ACATION_CLOSE)}>
            Close
        </Button>
        <Button variant="primary" onClick={() => onAction(MODAL_ACATION_CONFIRM)}>
            Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ConfirmModal

