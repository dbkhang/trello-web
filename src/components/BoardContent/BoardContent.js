import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { isEmpty } from 'lodash'
import { Container as BootstrapContainer,
  Row, Col, Form, Button } from 'react-bootstrap'

import Column from 'components/Column/Column'
import { mapOrder } from 'utilities/sorts'
import { initialData } from 'action/initialData'
import { applyDrag } from 'utilities/dragDrop'

import './BoardContent.scss'

function BoardContent() {
  const [board, setBoard] = useState({})
  const [columns, setColumns] = useState({})
  const [openNewColumnForm, setOpenNewColumnForm] = useState(false)

  const newColumnInputRef = useRef(null)

  const [newColumnTitle, setNewColumnTitle] = useState('')

  const onNewTitle = useCallback((e) => setNewColumnTitle(e.target.value), [])

  useEffect(() => {
    const boardFromDB = initialData.boards
      .find(board => board.id === 'board-1')
    if (boardFromDB) {
      setBoard(boardFromDB)

      setColumns(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id'))
    }
  }, [])

  useEffect(() => {
    if (newColumnInputRef && newColumnInputRef.current) {
      newColumnInputRef.current.focus()
      newColumnInputRef.current.select()
    }
  }, [openNewColumnForm])

  if (isEmpty(board)) {
    return (
      <div className="not-found">board not found</div>
    )
  }

  const onColumnDrop = (dropResult) => {
    let newcolumns = [...columns]
    newcolumns = applyDrag(newcolumns, dropResult)

    let newBoard = { ...board }
    newBoard.columnOrder = newcolumns.map(c => c.id)
    newBoard.columns = newcolumns

    setColumns(newcolumns)
    setBoard(newBoard)
  }

  const onCardDrop = (columnId, dropResult) => {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      let newcolumns = [...columns]

      let currenColumn = newcolumns.find(c => c.id === columnId)

      currenColumn.cards = applyDrag(currenColumn.cards, dropResult)
      currenColumn.cardOrder = currenColumn.cards.map(i => i.id)

      setColumns(newcolumns)
    }
  }

  const clickOpenNewColumnForm = () => {
    setOpenNewColumnForm(!openNewColumnForm)
  }

  const addNewColumn = () => {
    if (!newColumnTitle) {
      newColumnInputRef.current.focus()
      return
    }

    const newColumnToAdd = {
      id: Math.random().toString(36).substring(2, 5),
      boardId: board.id,
      title: newColumnTitle.trim(),
      cardOrder: [],
      cards: []
    }

    let newcolumns = [...columns]
    newcolumns.push(newColumnToAdd)

    let newBoard = { ...board }
    newBoard.columnOrder = newcolumns.map(c => c.id)
    newBoard.columns = newcolumns

    setColumns(newcolumns)
    setBoard(newBoard)
    setNewColumnTitle('')
    clickOpenNewColumnForm()
  }

  const onUpdateColumn = (newColumnToUpdate) => {
    const columnIdToUpdate = newColumnToUpdate.id

    let newColumns = [...columns]
    const columnIndexToUpdate = newColumns.findIndex(i => i.id === columnIdToUpdate)
    if (newColumnToUpdate._destroy) {
      newColumns.splice(columnIndexToUpdate, 1)
    } else {
      newColumns.splice(columnIndexToUpdate, 1, newColumnToUpdate)
    }

    let newBoard = { ...board }
    newBoard.columnOrder = newColumns.map(c => c.id)
    newBoard.columns = newColumns

    setColumns(newColumns)
    setBoard(newBoard)
  }

  return (
    <div className="board-content">
      <Container
        orientation="horizontal"
        onDrop={onColumnDrop}
        getChildPayload={index => columns[index]}
        dragHandleSelector=".column-drag-handle"
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: 'column-drop-preview'
        }}
      >
        {columns.map((column, index) => (
          <Draggable key={index} >
            <Column column={column} onCardDrop={onCardDrop} onUpdateColumn={onUpdateColumn} />
          </Draggable>
        ))}
      </Container>

      <BootstrapContainer className="trello-container">
        {!openNewColumnForm &&
          <Row>
            <Col className="add-new-column" onClick={clickOpenNewColumnForm}>
              <i className="fa fa-plus icon" /> Add anthor card
            </Col>
          </Row>
        }

        {openNewColumnForm &&
          <Row>
            <Col className="enter-new-column">
              <Form.Control
                size="sm"
                type="text"
                placeholder="Enter column title"
                className="input-enter-new-column"
                ref={newColumnInputRef}
                value={newColumnTitle}
                onChange={onNewTitle}
                onKeyDown={Event => (Event.key === 'Enter') && addNewColumn()}
              />
              <Button variant="success" size="sm" onClick={addNewColumn}>Add column</Button>
              <span className="cancel-new-column" onClick={clickOpenNewColumnForm}>
                <i className="fa fa-times icon" />
              </span>
            </Col>
          </Row>
        }
      </BootstrapContainer>
    </div>
  )
}

export default BoardContent