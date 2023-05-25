import React, { useState, useEffect, useRef } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { isEmpty } from 'lodash'
import { Container as BootstrapContainer, Row, Col, Form, Button } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

import BoardBar from 'components/BoardBar/BoardBar'
import Column from 'components/Column/Column'
import { mapOrder } from 'utilities/sorts'
import { initialData } from 'actions/initialData'
import { applyDrag } from 'utilities/dragDrop'
import {
  fetchBoardDetails,
  createNewColumn,
  fetchupdateBoard,
  updateColumnAPI,
  updateCardAPI
} from 'actions/APIcall/APIBoard'

import './BoardContent.scss'

function BoardContent() {
  const loca = useLocation()
  const idBoard = loca.state.id
  const [board, setBoard] = useState({})
  const [columns, setColumns] = useState({})
  const [openNewColumnForm, setOpenNewColumnForm] = useState(false)

  const clickOpenNewColumnForm = () => {
    setOpenNewColumnForm(!openNewColumnForm)
  }

  const newColumnInputRef = useRef(null)

  const [newColumnTitle, setNewColumnTitle] = useState('')

  const onNewTitle = (e) => setNewColumnTitle(e.target.value)

  useEffect(() => {
    console.log(idBoard);
    const boardFromDB = initialData.boards.find(board => board.id === 'board-1')
    if (boardFromDB) {
      setBoard(boardFromDB)
      setColumns(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id'))
    }
    // API
    fetchBoardDetails(idBoard).then(board => {
      setBoard(board)
      setColumns(mapOrder(board.columns, board.columnOrder, 'id'))
    }).catch(error => console.log(error))
  }, [idBoard])

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

    // API di chuyen cot
    const data = {
      boardId: newBoard.id,
      columnOrder: newBoard.columnOrder
    }
    fetchupdateBoard(data).then(rep => {
      setColumns(newcolumns)
      setBoard(newBoard)
    }).catch(error => console.log(error))

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

      if (dropResult.removedIndex !== null && dropResult.addedIndex !== null) {

        // API di chuyen card
        updateColumnAPI(currenColumn.id, currenColumn).catch(() => setColumns(columns))
      } else {
        // API di chuyen card
        updateColumnAPI(currenColumn.id, currenColumn).catch(() => setColumns(columns))
        if (dropResult.addedIndex !== null) {
          let currenCard = dropResult.payload
          currenCard.columnId = currenColumn.id
          updateCardAPI(currenCard.id, currenCard)
        }
        // updateColumnAPI(data).catch(() => setColumns(columns))
      }
    }
  }

  const addNewColumn = () => {
    if (!newColumnTitle) {
      newColumnInputRef.current.focus()
      return
    }

    let newColumnToAdd = {
      id: Math.random().toString(36).substring(2, 5),
      boardId: board.id,
      title: newColumnTitle.trim(),
      cardOrder: [],
      cards: []
    }

    createNewColumn(newColumnToAdd).then(column => {
      let newcolumns = [...columns]
      newcolumns.push(column)

      let newBoard = { ...board }
      newBoard.columnOrder = newcolumns.map(c => c._id)
      newBoard.columns = newcolumns

      setColumns(newcolumns)
      setBoard(newBoard)
      setNewColumnTitle('')
      clickOpenNewColumnForm()
    })

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

  const onUpdateColumnState = (newColumnToUpdate) => {
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

  const onUpdateTitleBoard = (newTitle) => {
    let newBoard = board
    newBoard.title = newTitle
    setBoard(newBoard)
  }

  const onUpdateColorBoard = (newColor) => {
    let newBoard = { ...board }
    newBoard.colorBoard = newColor
    setBoard(newBoard)
  }

  return (
    <div style={{ backgroundColor: board.colorBoard }}>
      <BoardBar
        boardTitle={board.title}
        idBoard={board.id}
        onUpdateTitleBoard={onUpdateTitleBoard}
        updateColorBoard={onUpdateColorBoard}
      />
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
              <Column
                idBoard={board.id}
                column={column}
                onCardDrop={onCardDrop}
                onUpdateColumnState={onUpdateColumnState}
              />
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
                className="cancel-icon"
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
    </div>
  )
}

export default BoardContent