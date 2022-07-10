import React from 'react'
import Logo from '../../components/logo/logo'
import Search from '../../components/search/search'
import Sortview from '../../components/sortview/sortview'
import Title from '../../components/title/title'
import './topbar.css'

const Topbar = (props) => {

  return (
    <div className='res-topbar'>
        <Logo />
        <Title />
        <Search handleSearchChange={(data) => props.handleSearchChange(data)}/>
        <Sortview handleSortBy={(data) => props.handleSortBy(data)}/>
    </div>
  )
}

export default Topbar