import React from 'react'
import './App.scss'

import TopBar from 'components/TopBar/TopBar'
import BoardBar from 'components/BoardBar/BoardBar'
import BoarContent from 'components/BoardContent/BoardContent'

function App() {
  return (
    <div className="trello-web">
      <TopBar />
      <BoardBar />
      <BoarContent />
    </div>
  )
}

export default App
