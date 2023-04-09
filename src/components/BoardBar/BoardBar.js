import React from 'react'
import { Container as BTContainer, Row, Col } from 'react-bootstrap'

import './BoardBar.scss'

function BoardBar() {
  return (
    <nav className="navbar-board">
      <BTContainer className="container">
        <Row>
          <Col sm={10} xs={12} className="col-no-padding">
            <div className="board-info">
              <div className="item board-logo-icon">
                <i className="fa fa-coffee" />
                &nbsp;&nbsp;<strong>Name test</strong>
              </div>
              <div className="divider"></div>

              <div className="item board-type">private</div>
              <div className="divider"></div>

              <div className="item member-avatar">
                <img alt="avatar-user" title="trello-avatar" />
                <span className="more-members">+7</span>
                <span className="invite">Invite</span>
              </div>
            </div>
          </Col>
          <Col sm={2} xs={12} className="col-no-padding">
            <div className="board-actions">
              <div className="item menu"><i className="fa fa-ellipsis-h mr-2" /></div>
            </div>
          </Col>
        </Row>
      </BTContainer>
    </nav>
  )
}

export default BoardBar
