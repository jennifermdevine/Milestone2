import {useState,useEffect} from 'react'
import restaurant from '../restaurant.png'
import { useParams,Link,Route,Outlet,UseNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

export default function Out() {
    const [restaurants, setRestaurants] = useState([])

    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4005/api/restaurants')
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
                    <Link to={`restaurant/${restaurant.restaurant_id}`}>
                    <li key={index} style={{paddingBottom:'25px'}}>
                        <div>Name: {restaurant.name}</div>
                        <div>Protein: {restaurant.protein}</div>
                        <div>Year Founded:{restaurant.year_founded}</div>
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