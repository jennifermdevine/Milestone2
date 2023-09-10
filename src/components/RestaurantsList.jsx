/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import restaurant from '../restaurant.png'
import { Link} from 'react-router-dom'


export default function RestaurantsList() {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://in-or-out.onrender.com/api/restaurants/allRestaurants')
      const json = await response.json()
      setRestaurants(json)
    }
    fetchData()
  }, [])

  return (
    <div className="restaurantPage">
        <img src={restaurant} alt="a dark and intimate restaurant" width="550" height="650px"/>

      <div className="restaurants">
        <h1 className="restaurantRec">Restaurants List</h1>

        <ul className="restaurantxList">
          {restaurants.map((restaurant, index) => (
            <li key={index} style={{ paddingBottom: '25px' }}>

              <Link className="a" to={`restaurant/${restaurant.restaurant_id}`}>
                <li key={index} style={{ paddingBottom: '25px' }}>
                  <div>Name: {restaurant.name}</div>
                  <div>Protein: {restaurant.protein}</div>
                </li>
              </Link>

            </li>
          ))}
        </ul>

        <div>
          <Link to='/restaurants'><Button variant='danger'>Back to Recommendations</Button></Link>
        </div>
        <br />
        <div><Link to='/restaurants/addRestaurant'><Button variant="danger">Add restaurant</Button></Link></div>


      </div>
    </div>

  )
}