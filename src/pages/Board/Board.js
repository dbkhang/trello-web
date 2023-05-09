import React, { useEffect, useState } from 'react'

import TopBar from 'components/TopBar/TopBar'
import BoarContent from 'components/BoardContent/BoardContent'
import { fetchDataHome } from 'actions/APIcall/APIPageHome'
import { dataUser } from 'actions/initialData'

function Board() {
  const [userData, setUserData] = useState()

  useEffect(() => {
    fetchDataHome().then(data => {
      setUserData(data)
      // setBoard(data.listBoard)
    }).catch(error => console.log(error))
  }, [])

  return (
    <div className="trello-web">
      <TopBar
        data={dataUser} //sửa thành userData
      />
      <BoarContent />
    </div>
  )
}

export default Board