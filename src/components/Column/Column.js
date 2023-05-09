import React, { useEffect, useRef, useState } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { Dropdown, Form, Button } from 'react-bootstrap'

import Card from 'components/Card/Card'
import { mapOrder } from 'utilities/sorts'
import CardInfo from '../CardInfo/CardInfo'
import { createNewCard, updateTitleColumn, removeColumnAPI } from 'actions/APIcall/APIColumn'
// import { createNewCard, updateColumn } from 'actions/APIcall'

import './Column.scss'

function Column(props) {
  const { idBoard, column, onCardDrop, onUpdateColumnState } = props
  const cards = mapOrder(column.cards, column.cardOrder, 'id')
  // const [cards, setCards] = useState(mapOrder(column.cards, column.cardOrder, 'id'))
  const [columnState, setColumnState] = useState(column)
  // const [showConfirmModal, setShowConfirmModal] = useState(false)
  // const toggleShowConfirmModal = () => setShowConfirmModal(!showConfirmModal)
  const [columnTitle, setColumnTitle] = useState('')
  const handleColumnTitleChange = (e) => setColumnTitle(e.target.value)

  const [openNewCardForm, setOpenNewCardForm] = useState(false)

  const clickOpenNewCardForm = () => {setOpenNewCardForm(!openNewCardForm)}

  const newCardTextareaRef = useRef(null)

  const [newCardTitle, setNewCardTitle] = useState('')

  const onNewCardTitle = (e) => setNewCardTitle(e.target.value)

  const [showCardInfo, setShowCardInfo] = useState(false)
  const [oneCard, setOneCard] = useState()

  useEffect(() => {
    setColumnTitle(column.title)
  }, [column.title])

  useEffect(() => {
    if (newCardTextareaRef && newCardTextareaRef.current) {
      newCardTextareaRef.current.focus()
      newCardTextareaRef.current.select()
    }
  }, [openNewCardForm])

  const removeColumn = () => {
    console.log('aaaa')
    const data = {
      idBoard : idBoard,
      idColumn: column.id
    }
    removeColumnAPI(data).then(rep => {
      const newColumn = {
        ...column,
        _destroy: true
      }
      onUpdateColumnState(newColumn)
    }).catch(error => console.log(error))

    const newColumn = {
      ...column,
      _destroy: true
    }
    onUpdateColumnState(newColumn)
  }

  const selectAllInlineText = (e) => {
    e.target.focus()
    e.target.select()
  }

  const handleColumnTitleBlur = () => {
    if (columnTitle !== column.title) {
      updateTitleColumn(column.id, columnTitle).then(newTitle => {
        const newColumn = {
          ...column,
          title: newTitle
        }
        onUpdateColumnState(newColumn)
      }).catch(error => console.log(error))
    }
    const newColumn = {
      ...column,
      title: columnTitle
    }
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
      date: '',
      status: 'doing'
    }

    createNewCard(newCardToAdd).then(card => {
      let newColumn = column
      newColumn.cards.push(card)
      newColumn.cardOrder.push(newCardToAdd.id)

      onUpdateColumnState(newColumn)
      setNewCardTitle('')
      clickOpenNewCardForm()
    }).catch(error => console.log(error))


    let newColumn = column
    newColumn.cards.push(newCardToAdd)
    newColumn.cardOrder.push(newCardToAdd.id)

    onUpdateColumnState(newColumn)
    setNewCardTitle('')
    clickOpenNewCardForm()
  }

  const updateCard = (cardUpdate) => {
    let newCards = columnState.cards

    const cardIdToUpdate = cardUpdate.id
    const cardIndexToUpdate = newCards.findIndex(i => i.id === cardIdToUpdate)
    if (cardUpdate._destroy) {
      newCards.splice(cardIndexToUpdate, 1)
    } else {
      newCards.splice(cardIndexToUpdate, 1, cardUpdate)
    }

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
    <>
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
                <Dropdown.Item onClick={clickOpenNewCardForm}>Add card...</Dropdown.Item>
                <Dropdown.Item onClick={removeColumn}>Remove column...</Dropdown.Item>
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
              <Draggable key={index}>
                <div onClick={() => setShowCardInfo(true)} >
                  <Card
                    card={card}
                    dataCardInfo={setOneCard}
                  />
                </div>
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
      </div>
      {showCardInfo && (
        <CardInfo
          onClose={() => setShowCardInfo(false)}
          cardInfos={oneCard}
          updateCard={updateCard}
          show={setShowCardInfo}
        />
      )}
    </>
  )
}

export default Column