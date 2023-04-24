import React from 'react'

import TopBar from 'components/TopBar/TopBar'
import BoarContent from 'components/BoardContent/BoardContent'
import { dataUser } from 'actions/initialData'

function Board() {

  return (
    <div className="trello-web">
      <TopBar
        data={dataUser}
      />
      <BoarContent />
    </div>
  )
}

export default Board