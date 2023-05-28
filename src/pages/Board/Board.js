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