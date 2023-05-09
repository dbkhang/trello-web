// import React from 'react'
// import { Modal as Modalcon, Button } from 'react-bootstrap'
// import HTMLReactParser from 'html-react-parser'
// import { MODAL_ACATION_CLOSE, MODAL_ACATION_CONFIRM } from 'utilities/constants'

// function ConfirmModal(props) {
//   const { title, content, show, onAction } = props

//   return (
//     <Modalcon
//       show={show}
//       onHide={() => onAction(MODAL_ACATION_CLOSE)}
//       backdrop="static"
//       keyboard={false}
//       animation={false}
//     >
//       <Modalcon.Header closeButton>
//         <Modalcon.Title className="h5">{HTMLReactParser(title)}</Modalcon.Title>
//       </Modalcon.Header>
//       <Modalcon.Body>{HTMLReactParser(content)} </Modalcon.Body>
//       <Modalcon.Footer>
//         <Button variant="secondary" onClick={() => onAction(MODAL_ACATION_CLOSE)}>
//             Close
//         </Button>
//         <Button variant="primary" onClick={() => onAction(MODAL_ACATION_CONFIRM)}>
//             Confirm
//         </Button>
//       </Modalcon.Footer>
//     </Modalcon>
//   )
// }

// export default ConfirmModal

