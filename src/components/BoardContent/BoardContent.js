import React, { useState, useEffect } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { isEmpty } from 'lodash'

import Column from 'components/Column/Column'
import { mapOrder } from 'utilities/sorts'
import { initialData } from 'action/initialData'
import { applyDrag } from 'utilities/dragDrop'

import './BoardContent.scss'

function BoardContent() {
  const [board, setBoard] = useState({})
  const [columns, setColumns] = useState({})

  useEffect(() => {
    const boardFromDB = initialData.boards
      .find(board => board.id === 'board-1')
    if (boardFromDB) {
      setBoard(boardFromDB)

      setColumns(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id'))
    }
  }, [])

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
            <Column column={column} onCardDrop={onCardDrop} />
          </Draggable>
        ))}
      </Container>
      <div className="add-new-column">
        <i className="fa fa-plus icon" /> Add anthor card
      </div>
    </div>
  )
}

export default BoardContent