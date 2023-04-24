import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

import './BoardBar.scss'
import InfoMember from 'components/InfoMember/InfoMember'

function BoardBar(props) {
  const colors = [
    '#a8193d',
    '#4fcc25',
    '#1ebffa',
    '#8da377',
    '#9975bd',
    '#cf61a1',
    '#240959'
  ]
  const [titleBoard, setTitleBoard]= useState(props.boardTitle)
  const [showMemberBoard, setShowMemberBoard] = useState(false)
  const [showActionsBoard, setShowActionsBoard] = useState(false)
  const [selectedColor, setSelectedColor] = useState('')
  const [showInvite, setShowInvite] = useState(false)

  const handleBoardTitleChange = (e) => setTitleBoard(e.target.value)

  const handleShowActionBoard = () => setShowActionsBoard(!showActionsBoard)

  const handleBoardTitleBlur = () => {
    // const newColumn = {
    //   ...column,
    //   title: columnTitle
    // }
    // // Call API update column
    // // if (columnTitle !== column.title) {
    // //   updateColumn(newColumn._id, newColumn).then(updateColumn => {
    // //     updateColumn.cards = newColumn.cards
    // //     onUpdateColumnState(updateColumn)
    // //   })
    // // }
    // onUpdateColumnState(newColumn)
    props.onUpdateTitleBoard(titleBoard)
  }

  const saveTitleAfterEnter = (e) => {
    if (e.key === 'Enter') {
      e.target.blur()
    }
  }

  const selectAllInlineText = (e) => {
    e.target.focus()
    e.target.select()
  }

  const updateColor = (color) => {
    setSelectedColor(color)
    props.updateColorBoard(color)
  }

  return (
    <nav className="navbar-board" style={{ selectedColor }}>
      <div className="board-info">
        <div className="item">
          <Form.Control
            size="sm"
            type="text"
            className="trello-editable"
            value={titleBoard}
            onChange={handleBoardTitleChange}
            onBlur={handleBoardTitleBlur}
            onKeyDown={saveTitleAfterEnter}
            spellCheck="false"
            onClick={selectAllInlineText}
            onMouseDown={e => e.preventDefault()}
          />
        </div>

        <div className="divider"></div>

        <div className="item member-board">
          <div className="more-members" >
            <div onClick={() => setShowMemberBoard(!showMemberBoard)}>Members</div>
            {showMemberBoard &&
              <nav className="members-wrapper">
                <div className="members-arrow-top"></div>
                <div className="members-main">
                  <div className="members-top">
                    <h3>Members in the table</h3>
                  </div>
                  <div className="members-container">
                    <InfoMember />
                    <InfoMember />
                  </div>
                </div>
              </nav>
            }
          </div>
          <div className="invite">
            {!showInvite &&
              <div className="btn-show-invite" onClick={() => setShowInvite(!showInvite)}>
                Invite
              </div>
            }
            {showInvite &&
              <div className="show-invite">
                <input />
                <button>Invite</button>
                <i className="fa fa-times" onClick={() => setShowInvite(!showInvite)} />
              </div>
            }
          </div>
        </div>
      </div>
      <div className="board-actions">
        <div className="item menu" onClick={handleShowActionBoard}><i className="fa fa-ellipsis-h mr-2" /></div>
        {showActionsBoard &&
          <div className="board-actions-content">
            <div className="board-actions-top">
              <h3>MENU</h3>
              <div className="icon-cancle-board-actions" onClick={handleShowActionBoard}>
                <i className="fa fa-times" />
              </div>
            </div>
            <div className="choose-color-bg">
              <ul>
                {colors.map((item, index) => (
                  <li
                    key={index + item}
                    style={{ backgroundColor: item }}
                    className={selectedColor === item ? 'li_active' : ''}
                    onClick={() => updateColor(item)}
                  />
                ))}
              </ul>
            </div>
          </div>
        }
      </div>
    </nav>
  )
}

export default BoardBar
