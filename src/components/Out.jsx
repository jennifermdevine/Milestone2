import {useState,useEffect} from 'react'
import restaurant from '../restaurant.png'
import { useParams,Link,Route,Outlet,UseNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

export default function Out() {
    const [restaurants, setRestaurants] = useState([])

    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch('https://in-or-out.onrender.com/restaurants')
            const json = await response.json()
            setRestaurants(json)
        }
        fetchData()
    }, [] )

    return (
        <div className="restPage">
        <div className="restaurants">
            <h1 className="restRec">Restaurant Recommendations</h1>
            <ul className="restaurantList">
                {restaurants.map((restaurant,index) => (
                    <Link className="a" to={`restaurant/${restaurant.restaurant_id}`}>
                    <li key={index} style={{paddingRight:'25px'}}>
                        <div>Name: {restaurant.name}</div>
                        <div>Protein: {restaurant.protein}</div>
                        <img className="restaurantImg" src={restaurant.img} alt={restaurant.name}></img>
                    </li>
                    </Link>
                ))}
            </ul>

            <div>
                <Link to='/restaurants/list'><Button variant="danger">List</Button></Link>
            </div>

        </div>
        <img src={restaurant} alt="a dark and intimate restaurant" width="550" height="650px"/>
        </div>


    )
}