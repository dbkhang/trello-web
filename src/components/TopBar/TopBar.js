import React from 'react'
import { Container as BtContainer, Row, Col, InputGroup, FormControl } from 'react-bootstrap'

import './TopBar.scss'

function TopBar() {
  return (
    <nav className="navbar-top">
      <BtContainer className="trello-top-container">
        <Row>
          <Col sm={5} xm={12} className="col-no-padding">
            <div className="app-action">
              <div className="item all"><i className="fa fa-th" /></div>
              <div className="item home"><i className="fa fa-home" /></div>
              <div className="item boards"><i className="fa fa-columns" />&nbsp;&nbsp;<strong>Boards</strong></div>
              <div className="item search">
                <InputGroup className="group-search">
                  <FormControl
                    className="input-search"
                    placeholder="Search"
                  />
                  <InputGroup.Text className="input-icon-search"><i className="fa fa-search" /></InputGroup.Text>
                </InputGroup>
              </div>
            </div>
          </Col>
          <Col sm={5} xm={12} className="col-no-padding">
            <div className="user-actions">
              <div className="item quick"><i className="fa fa-plus-square-o" /></div>
              <div className="item news"><i className="fa fa-info-circle" /></div>
              <div className="item notification"><i className="fa fa-bell-o" /></div>
              <div className="item user-avatar">
                <img alt="avatar-user" title="trello-avatar" />
              </div>
            </div>
          </Col>
        </Row>
      </BtContainer>
    </nav>
  )
}

export default TopBar
