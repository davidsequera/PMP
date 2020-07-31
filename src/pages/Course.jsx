import React from 'react'
import './styles/Explore.css'
import RestaurantList from '../components/RestaurantList'



class Explore extends React.Component{
    render(){
        return(
                <div className="Page-container" id="Explore">
                    <h1 className="Page-title">Explore</h1>
                    <div className="explore">
                        <h2 style={{'margin': '2px'}}>Restaurants</h2>
                        <RestaurantList
                        restaurant={this.state.data.data}
                        />
                    </div>
                </div>
        )
    }
}

export default Explore;