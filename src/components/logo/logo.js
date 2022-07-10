import React from 'react'
import logoImage from '../../assests/icons/logo.jpg'
import './logo.css'

const Logo = () => {
  return (
    <div className='res-logo'>
        <img src={logoImage} width={50} height={50} alt={'logoImage'}/>
    </div>
  )
}

export default Logo