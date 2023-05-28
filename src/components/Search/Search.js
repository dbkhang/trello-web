import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeadlessTippy from '@tippyjs/react/headless'

import './Search.scss'
import { searchAPI } from 'actions/APIcall/searchAPI'


function Search() {
  const [searchValue, setSearchValue] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [listBoard, setListBoard] = useState([])

  useEffect(() => {
    if (!searchValue.trim()) {
      setListBoard([])
      setShowResult(false)
      return
    } else {
      setShowResult(true)
    }
    const fetchApi = async () => {

      try {
        const result = await searchAPI(searchValue)
        // const result = [
        //   {
        //     title: 'bac',
        //     id: '1'
        //   },
        //   {
        //     title: 'bac',
        //     id: '2'
        //   },
        //   {
        //     title: 'bac',
        //     id: '3'
        //   }
        // ]
        setListBoard(result)
      } catch (error) {
        console.log(error)
      }
    }

    fetchApi()
  }, [searchValue])
  return (
    <HeadlessTippy
      interactive
      visible={ showResult && listBoard.length > 0 }
      render={attrs => (
        <div className="search-result" tabIndex="-1" {...attrs}>
          {listBoard.map((item, index) => (
            <Link
              key={index}
              className="list-board-show"
              to="/board"
            >{ item.title }</Link>
          ))}
        </div>
      )}
      onClickOutside={() => setShowResult(false)}
    >
      <div className="search">
        <input
          className="input-search"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </HeadlessTippy>

  )
}

export default Search