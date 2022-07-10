import axios from 'axios'

const baseURL = process.env.REACT_APP_REST_SERVICE_BASE_URL || "https://racen-restaurant-app.herokuapp.com"
const getRestaurantsURL = baseURL + '/restaurants'

export const getRestaurants = async (config) => {
    console.log(process.env.REACT_APP_REST_SERVICE_BASE_URL)
    return (
        await axios.post(getRestaurantsURL, {
            "filter": config.filter,
            "limit": config.limit,
            "page": config.page,
            "sort": config.sort
        }).then((output) => {
            return output.data
        }).catch((error) => {
            return error
        })
    )
}

export const searchRestaurants = async (value) => {
    return (
        await axios.get(baseURL + `/restaurant/search/${value}`)
        .then((output) => {
            return output.data
        }).catch ((error) => {
            return error
        })
    )
}