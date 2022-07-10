import React from 'react'
import Select from 'react-select'
import './sortview.css'

const Sortview = (props) => {

    const sortOption = [
        {
            label: 'Name',
            value: 1
        },
        {
            label: 'Location',
            value: 2
        },
        {
            label: 'Rating',
            value: 3
        }
    ]

  return (
    <div>
        <Select className='res-sortdropdown' options={sortOption} onChange={(data) => props.handleSortBy(data.label)}/>
    </div>
  )
}

export default Sortview