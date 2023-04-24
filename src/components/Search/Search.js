import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Search.scss'


function Search() {
  const [searchValue, setSearchValue] = useState('')
  const [showResult, setShowResult] = useState(false)

  // const onChangeSearchValue = (e) => setSearchValue(e.target.value)
  //   const [searchResult, setSearchResult] = useState([]);
  //   const [showResult, setShowResult] = useState(false);
  //   const [loading, setLoading] = useState(false);


  //     useEffect(() => {
  //     if (!debouncedValue.trim()) {
  //       setSearchResult([])
  //       return
  //     }

  //     const fetchApi = async () => {
  //       setLoading(true)

  //       const result = await searchServices.search(debouncedValue);

  //       setSearchResult(result)
  //       setLoading(false)
  //     }

  //     fetchApi()
  //   }, [debouncedValue])

  //   const handleClear = () => {
  //     setSearchValue('')
  //     setSearchResult([])
  //   }

  //   const handleHideResult = () => {
  //     setShowResult(false)
  //   }

  //   const handleChange = (e) => {
  //     const searchValue = e.target.value;
  //     if (!searchValue.startsWith(' ')) {
  //       setSearchValue(searchValue)
  //     }
  //   }
  return (
    <div className="item search">
      <input
        className="input-search"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className="search-btn"><i className="fa fa-search" /></div>
      { showResult &&
        <div className="search-result">
          {/* {listBoard.map((item, index) => (
            <Link
              key={index}
              className="list-board-show"
              style={{ backgroundColor: item.color }}
              onClick={clickBoard}
              to="/board"
            >{item.title}</Link>
          ))} */}
        </div>
      }
    </div>

  )
}

export default Search