import React, { useEffect, useState } from 'react'
import restaurantImage from '../../assests/images/restaurant.jpg'
import './restaurantlist.css'
import { Tag } from 'primereact/tag';
import { AiFillStar } from 'react-icons/ai'

const Restaurantlist = (props) => {
  const [restaurantData, setRestaurantData] = useState([])

  useEffect(() => {
    setRestaurantData(props.restaurantData)
  }, [props.restaurantData])

  return (
    <div className='res-restaurantlist'>
      {restaurantData.map((item) => 
        <div className='card res-cardrestaurantlist'>
          <div className='row'>
            <div className='col-3'>
              <img src={restaurantImage} alt={'restaurantImage'} />
            </div>
            <div className='col-5'>
              <div className='row'>
                Name of the Restaurant: {item.restaurantName}
              </div>
              <div className='row'>
                Location: {item.restaurantLocation}
              </div>
              <div className='row'>
                {item.restaurantContent}
              </div>
              <div className='row'>
                Tags: &nbsp;<Tag style={{width: 70}}>{item.restaurantStyle}</Tag>
              </div>
            </div>
            <div className='col-2'>
              <Tag>{item.restaurantType}</Tag>
            </div>
            <div className='col-2'>
              {item.restaurantRating} &nbsp; <AiFillStar />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Restaurantlist