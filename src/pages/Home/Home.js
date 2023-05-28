import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import './Home.scss'
import ToolTip from 'components/ToolTip/ToolTip'
import TopBar from 'components/TopBar/TopBar'
import CardBoardItem from 'components/CardBoardItem/CardBoardItem'
import InputForm from 'components/InputForm/InputForm'
import { fetchDataUser, fetchDataListBoard, createNewBoard } from 'actions/APIcall/APIPageHome'

function Home() {
  const [userData, setUserData] = useState({})
  const [userListBoard, setUserListBoard] = useState([])
  // const [board, setBoard] = useState(userListBoard)
  const history = useNavigate()
  const [showToolTip, setShowToolTip] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (token !== '') {
      // history('/signin')
    }
    fetchDataUser().then(res => {
      if (res.status === 200) {
        let data = res.data
        setUserData(data)
      }
    }).catch(error => console.log(error))

    fetchDataListBoard().then(res => {
      if (res.status === 200) {
        let data = res.data
        setUserListBoard(data)
      }
    }).catch(error => console.log(error))

    const abc = {
      imageUser: 'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg',
      userName: 'aaaa',
      userEmail: 'ccccc'
    }
    const ccc = [
      {
        id: '1',
        title: 'board 1',
        color: '#333'
      },
      {
        id: '2',
        title: 'board 2',
        color: '#133'
      }
    ]
    setUserData(abc)
    setUserListBoard(ccc)
  }, [])


  const addBoard = (titleBoard) => {
    const newBoardAdd = {
      id: Date.now() + Math.random() * 2,
      title: titleBoard,
      color: '#333'
    }
    createNewBoard(newBoardAdd).then(res => {
      if (res.status == 200) {
        const newBoardAddRes = res.data
        let newBoard = [...userListBoard]
        newBoard.push(newBoardAddRes)
        setUserListBoard(newBoard)
        // let newBoard = [...board]
        // newBoard.push(newBoardAddRes)
        // setBoard(newBoard)
      }
    }).catch (err => {
      if (err.response.status !== 200) {
        setShowToolTip(true)
      }
    })
  }

  const addeedBoard = (newBoardAdd) => {
    let newBoard = [...userListBoard]
    newBoard.push(newBoardAdd)
    setUserListBoard(newBoard)
  }

  const handleClose = () => {
    setShowToolTip(false)
  }

  return (
    <div className="container__home">
      {showToolTip &&
        <ToolTip
          type={false}
          message={'Tạo bảng thất bại'}
          handleClose={handleClose}
        />
      }
      <TopBar
        user={userData}
        data={userListBoard}
        addBoard={addeedBoard}
      />
      <div className='main-home'>
        <div className='container-home'>
          {userListBoard.map((item, index) => (
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
            text={'Tạo bảng mới'}
            placeholder='Tên bảng'
            onSubmit={addBoard}
          />
        </div>
      </div>
    </div>
  )
}

export default Home