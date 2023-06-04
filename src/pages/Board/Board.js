import React, { useEffect, useState } from 'react'

import TopBar from 'components/TopBar/TopBar'
import BoarContent from 'components/BoardContent/BoardContent'
import { fetchDataUser, fetchDataListBoard } from 'actions/APIcall/APIPageHome'
import { dataUser } from 'actions/initialData'

function Board() {
  const [userData, setUserData] = useState({})
  const [userListBoard, setUserListBoard] = useState([])

  useEffect(() => {

    fetchDataUser().then(data => {
      setUserData(data.data)
      // setBoard(data.listBoard)
    }).catch(error => console.log(error))

    fetchDataListBoard().then(data => {
      setUserListBoard(data.data)
      // setBoard(data.listBoard)
    }).catch(error => console.log(error))


    const abc = {
      userId: '123',
      imageUser: 'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg',
      userName: 'Khang',
      userEmail: 'dbkhang@gmail.com'
    }
    const ccc = [
      {
        id: '1',
        title: 'Bảng 1',
        color: '#a8193d'
      },
      {
        id: '2',
        title: 'Bảng 2',
        color: '#4fcc25'
      },
      {
        id: '1',
        title: 'Bảng 3',
        color: '#1ebffa'
      },
      {
        id: '2',
        title: 'Bảng 4',
        color: '#8da377'
      }
    ]
    setUserData(abc)
    setUserListBoard(ccc)
  }, [])

  return (
    <div className="trello-web">
      <TopBar
        user={userData}
        data={userListBoard} //sửa thành userData
      />
      <BoarContent />
    </div>
  )
}

export default Board