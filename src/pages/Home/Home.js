import React, { useState, useEffect } from 'react'

import './Home.scss'
import TopBar from 'components/TopBar/TopBar'
import CardBoardItem from 'components/CardBoardItem/CardBoardItem'
import { dataUser } from 'actions/initialData'
import InputForm from 'components/InputForm/InputForm'
import { fetchDataHome, createNewBoard } from 'actions/APIcall/APIPageHome'

function Home() {
  const [userData, setUserData] = useState()
  const [board, setBoard] = useState(dataUser.listBoard)

  useEffect(() => {
    fetchDataHome().then(data => {
      setUserData(data)
      // setBoard(data.listBoard)
    }).catch(error => console.log(error))
  }, [])


  const addBoard = (titleBoard) => {
    const newBoardAdd = {
      id: Date.now() + Math.random() * 2,
      title: titleBoard,
      color: '#333'
    }
    createNewBoard(newBoardAdd).then(newBoardAdd => {
      let newBoard = [...board]
      newBoard.push(newBoardAdd)
      setBoard(newBoard)
    })
    let newBoard = [...board]
    newBoard.push(newBoardAdd)
    setBoard(newBoard)
  }

  const addeedBoard = (newBoardAdd) => {
    let newBoard = [...board]
    newBoard.push(newBoardAdd)
    setBoard(newBoard)
  }

  return (
    <div className="container__home">
      <TopBar
        data={dataUser} //sửa thành userData
        addBoard={addeedBoard}
      />
      <div className='main-home'>
        <div className='container-home'>
          {board.map((item, index) => (
            <CardBoardItem
              key={index}
              id={item.id}
              title= {item.title}
              color= {item.color}
            />
          ))}
        </div>
      </div>
      <div className="add-board">
        <div className="content-add-board">
          <InputForm
            type='2'
            text={'Add a Board'}
            placeholder='Enter Board'
            onSubmit={addBoard}
          />
        </div>
      </div>
    </div>
  )
}

export default Home