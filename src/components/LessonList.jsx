import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Footer.css'

class Footer extends React.Component{
    render(){
        const restaurant = this.props.restaurant.restaurants 
        return(
                <ul className="RestaurantList_container">
                    {restaurant.map((restaurant) => <li key={restaurant._id}>
                                <Link to={`explore/${restaurant._id}`}className="RestaurantList_item">
                                    <img className="RestaurantList_logo" src={restaurant.logo} alt={`logo ${restaurant.name}`}></img>
                                    <h2 className="RestaurantList_Name">{restaurant.name}</h2>
                                </Link>
                            </li>
                    )}
                </ul>
        )
    }
}

export default Footer