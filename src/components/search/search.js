import React from 'react'
import './search.css'

const Search = (props) => {

  return (
    <div className='res-search'>
        <input className='res-inputsearch' placeholder='Search here...!' onChange={(data) => props.handleSearchChange(data.target.value)}/>
        <button className='res-buttonsearch'>Search</button>
    </div>
  )
}

export default Search