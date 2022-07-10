import React, { useState } from 'react'
import './sidefilter.css'

const Sidefilter = (props) => {
    const [enteredName, setEnteredName] = useState('')
    const [enteredLocation, setEnteredLocation] = useState('')
    const [enteredType, setEnteredType] = useState('')
    const [enteredStyle, setEnteredStyle] = useState('')
    

    const handleFilterSubmit = (event) => {
        event.preventDefault();
        const filterData = {
            name: enteredName,
            location: enteredLocation,
            type: enteredType,
            style: enteredStyle
        }
        props.handleFilter(filterData)
        setEnteredName('')
        setEnteredLocation('')
        setEnteredType('')
        setEnteredStyle('')
    }

  return (
    <div className='res-sidefilter'>
        <h3 className='res-sidefilterh1'>Restaurant Filter</h3> <hr className='res-filterhr'/>
            <form className='res-sidefilterlist' onSubmit={handleFilterSubmit}>
                <div>
                    <div>
                        <label className='res-sidetitle'>Restaurant Name:</label>
                        <input className='res-sidefilterdata' value={enteredName} placeholder='Ex: Dominos,KFC,...' onChange={(e) => setEnteredName(e.target.value)}/>
                    </div>
                    <div >
                        <label className='res-sidetitle'>Restaurant Location:</label>
                        <input className='res-sidefilterdata' value={enteredLocation} placeholder='Ex: Tirunelveli,Chennai,...' onChange={(e) => setEnteredLocation(e.target.value)}/>
                    </div>
                    <div >
                        <label className='res-sidetitle'>Restaurant Type:</label>
                        <input className='res-sidefilterdata' value={enteredType} placeholder='Ex: Veg/Non-Veg' onChange={(e) => setEnteredType(e.target.value)}/>
                    </div>
                    <div >
                        <label className='res-sidetitle'>Restaurant Style:</label>
                        <input className='res-sidefilterdata' value={enteredStyle} placeholder='Ex: Indian,Italian,...' onChange={(e) => setEnteredStyle(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <button type='submit' className='res-filtersubmit'>Apply Filters</button>
                </div>
            </form>
    </div>
  )
}

export default Sidefilter