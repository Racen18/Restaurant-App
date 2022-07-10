import React, { useEffect, useState } from 'react'
import './homepage.css'
import Topbar from '../topbar/topbar'
import Sidefilter from '../sidefilter/sidefilter'
import Restaurantlist from '../restaurantlist/restaurantlist'
import { getRestaurants, searchRestaurants } from '../../api/axiosapi'
import { ProgressSpinner } from 'primereact/progressspinner';

const Homepage = () => {
  const [restaurantData, setRestaurantData] = useState([])

  const config = {
    filter: {},
    limit: 5,
    page: 0,
    sort: {}
  }

  useEffect(() => {
    getRestaurants(config).then((res) => {
      setRestaurantData(res)
    })
  }, [])

  useEffect(() => {
    
  }, [restaurantData])

  const handleSearchChange = (data) => {
    searchRestaurants(data).then((res) => {
      setRestaurantData(res)
    }).catch((error) => {
      console.log(error)
    })
  }

  const handleSortBy = (data) => {
    if (data.toLowerCase() === 'name') {
      config.sort = {
        "restaurantName": 1
      }
      getRestaurants(config).then((res) => {
        setRestaurantData(res)
      })
    }
    else if (data.toLowerCase() === 'location') {
      config.sort = {
        "restaurantLocation": 1
      }
      getRestaurants(config).then((res) => {
        setRestaurantData(res)
      })
    }
    else {
      config.sort = {
        "restaurantRating": -1
      }
      getRestaurants(config).then((res) => {
        setRestaurantData(res)
      })
    }
  }

  const handleFilterCheck = (data) => {
    if (data.name !== '') {
      config.filter = {
        "restaurantName": data.name
      }
    }
    else if (data.location !== '') {
      config.filter = {
        "restaurantLocation": data.location
      }
    }
    else if (data.type !== '') {
      config.filter = {
        "restaurantType": data.type
      }
    }
    else if (data.style !== '') {
      config.filter = {
        "restaurantStyle": data.style
      }
    }
    getRestaurants(config).then((res) => {
      setRestaurantData(res)
    })
    config.filter = {}
  }

  const handleFilter = (data) => {
    handleFilterCheck(data)
  }

  return (
    <div className='res-homepage'>
      {restaurantData === [] ? <ProgressSpinner className='res-loader'/> :
        <div>
          <div className="card">
            <Topbar handleSearchChange={(data) => handleSearchChange(data)} handleSortBy={(data) => handleSortBy(data)}/>
          </div>
          <div className='res-row row'>
            <div className='col-2'>
              <Sidefilter handleFilter={(e) => handleFilter(e)}/>
            </div>
            <div className='col-10'>
              {console.log("uhjsdsjdjsshhjsgdj", restaurantData)}
              <Restaurantlist restaurantData={restaurantData}/>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Homepage