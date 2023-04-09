import React, { useEffect, useRef, useState } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { Dropdown, Form, Button } from 'react-bootstrap'
// import { cloneDeep } from 'lodash'

import Card from 'components/Card/Card'
import { mapOrder } from 'utilities/sorts'
import ConfirmModal from 'components/Common/ConfirmModal'
import { MODAL_ACATION_CONFIRM } from 'utilities/constants'
// import { createNewCard, updateColumn } from 'actions/APIcall'

import './Column.scss'

function Column(props) {
  const { column, onCardDrop, onUpdateColumnState } = props
  const cards = mapOrder(column.cards, column.cardOrder, 'id')
  // const [cards, setCards] = useState(mapOrder(column.cards, column.cardOrder, 'id'))
  const [columnState, setColumnState] = useState(column)
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const toggleShowConfirmModal = () => setShowConfirmModal(!showConfirmModal)
  const [columnTitle, setColumnTitle] = useState('')
  const handleColumnTitleChange = (e) => setColumnTitle(e.target.value)

  const [openNewCardForm, setOpenNewCardForm] = useState(false)

  const clickOpenNewCardForm = () => {setOpenNewCardForm(!openNewCardForm)}

  const newCardTextareaRef = useRef(null)

  const [newCardTitle, setNewCardTitle] = useState('')

  const onNewCardTitle = (e) => setNewCardTitle(e.target.value)

  useEffect(() => {
    setColumnTitle(column.title)
  }, [column.title])

  useEffect(() => {
    if (newCardTextareaRef && newCardTextareaRef.current) {
      newCardTextareaRef.current.focus()
      newCardTextareaRef.current.select()
    }
  }, [openNewCardForm])

  const onConfirmModal = (type) => {
    if (type === MODAL_ACATION_CONFIRM) {
      const newColumn = {
        ...column,
        _destroy: true
      }
      // updateColumn(newColumn._id, newColumn).then(updateColumn => {
      //   onUpdateColumnState(updateColumn)
      // })
      onUpdateColumnState(newColumn)
    }
    toggleShowConfirmModal()
  }

  const selectAllInlineText = (e) => {
    e.target.focus()
    e.target.select()
  }

  const handleColumnTitleBlur = () => {
    const newColumn = {
      ...column,
      title: columnTitle
    }
    // Call API update column
    // if (columnTitle !== column.title) {
    //   updateColumn(newColumn._id, newColumn).then(updateColumn => {
    //     updateColumn.cards = newColumn.cards
    //     onUpdateColumnState(updateColumn)
    //   })
    // }
    onUpdateColumnState(newColumn)
  }

  const saveTitleAfterEnter = (e) => {
    if (e.key === 'Enter') {
      // e.target.preventDefault()
      e.target.blur()
    }
  }

  const addNewCard = () => {
    if (!newCardTitle) {
      newCardTextareaRef.current.focus()
      return
    }

    const newCardToAdd = {
      id: Math.random().toString(36).substring(2, 5),
      boardId: column.boardId,
      columnId: column.id,
      title: newCardTitle.trim(),
      labels: [],
      tasks: [],
      description: '',
      date: ''
    }

    // createNewCard(newCardToAdd).then(card => {
    //   let newColumn = cloneDeep(column)
    //   newColumn.cards.push(card)
    //   newColumn.cardOrder.push(newCardToAdd._id)

    //   onUpdateColumnState(newColumn)
    //   setNewCardTitle('')
    //   clickOpenNewCardForm()
    // })
    // let newColumn = cloneDeep(column)
    let newColumn = column
    newColumn.cards.push(newCardToAdd)
    newColumn.cardOrder.push(newCardToAdd.id)
    // console.log(newColumn.cardOrder)

    onUpdateColumnState(newColumn)
    setNewCardTitle('')
    clickOpenNewCardForm()
  }

  const updateCard = (cardUpdate) => {
    let newCards = columnState.cards
    const index = newCards.findIndex((item) => item.id === cardUpdate.id)
    newCards[index] = cardUpdate
    setColumnState({ ...columnState, cards: newCards })
    onUpdateColumnState(columnState)

  }

  // useEffect(() => {
  //   if (onUpdateColumnState) onUpdateColumnState(columnState)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [columnState])

  return (
    <div className="column">
      <header className="column-drag-handle">
        <div className="column-title">
          <Form.Control
            size="sm"
            type="text"
            className="trello-editable"
            value={columnTitle}
            onChange={handleColumnTitleChange}
            onBlur={handleColumnTitleBlur}
            onKeyDown={saveTitleAfterEnter}
            spellCheck="false"
            onClick={selectAllInlineText}
            onMouseDown={e => e.preventDefault()}
          />
        </div>
        <div className="column-dropdown-action">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" size="sm" className="dropdown-btn" />

            <Dropdown.Menu>
              <Dropdown.Item>Add card...</Dropdown.Item>
              <Dropdown.Item onClick={toggleShowConfirmModal}>Remove column...</Dropdown.Item>
              <Dropdown.Item>Move all cards in this column...</Dropdown.Item>
              <Dropdown.Item>Archive all cards in this column...</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </header>
      <div className="card-list">
        <Container
          orientation="vertical"
          groupName="trello-colums"
          onDrop={dropResult => onCardDrop(column.id, dropResult)}
          getChildPayload={index => cards[index]}
          dragClass="card-ghost"
          dropClass="card-ghost-drop"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: 'card-drop-preview'
          }}
          dropPlaceholderAnimationDuration={200}
        >
          {cards.map((card, index) => (
            <Draggable key={index} >
              <Card
                card={card}
                updateCard={updateCard}
              />
            </Draggable>
          ))}
        </Container>
        {openNewCardForm &&
          <div className="add-new-card">
            <Form.Control
              size="sm"
              as="textarea"
              rows="3"
              placeholder="Enter card title"
              className="input-enter-new-card"
              ref={newCardTextareaRef}
              value={newCardTitle}
              onChange={onNewCardTitle}
              onKeyDown={Event => (Event.key === 'Enter') && addNewCard()}
            />
          </div>
        }
      </div>
      <footer>
        {openNewCardForm &&
          <div className="add-new-card-action">
            <Button variant="success" size="sm" onClick={addNewCard} >Add card</Button>
            <span className="cancel-icon" onClick={clickOpenNewCardForm}>
              <i className="fa fa-times icon" />
            </span>
          </div>
        }
        {!openNewCardForm &&
          <div className="footer-actions" onClick={clickOpenNewCardForm}>
            <i className="fa fa-plus icon" /> Add anthor card
          </div>
        }
      </footer>

      <ConfirmModal
        show={showConfirmModal}
        onAction={onConfirmModal}
        title="Remove colum"
        content={`Are you sure you want to remove <strong>${column.title}</strong>.</br> All related cards will also be romove!`}
      />
    </div>
  )
}

export default Column