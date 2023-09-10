import {useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import { useParams,Link} from 'react-router-dom'

export default function InRest() {
    const [restaurant, setRestaurant] = useState([''])
    const params = useParams();

    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4005/api/restaurants/restaurant/${JSON.stringify(params)}`)
            const json = await response.json()
            setRestaurant(json)
        }
        fetchData()
    }, [] )


    return (
        <div className="restaurantsPage">
            <img src={restaurant.img} alt={restaurant.name} width="550px" height="650px" />
        <div className="restaurants">
            <h1 className="restRec">Restaurant</h1>
            <ul className="restaurantsList">
                    <li  style={{paddingBottom:'25px'}}>
                        <div>Name: {restaurant.name}</div>
                        <div>Protein: {restaurant.protein}</div>
                        <div>Favorite Dishes:
                            <br />
                            <ul>
                                {restaurant.dish1} <br/>
                                {restaurant.dish2} <br/>
                                {restaurant.dish3} <br/>
                            </ul>
                        </div>
                    </li>
                </ul>
                
                <div>
                    <Link to='/restaurants'><Button variant='danger'>Back to Recommendations</Button></Link>
                </div>
                <div>
                    <Link to='/restaurants/list'><Button variant='danger'>Back to Restaurant List</Button></Link>
                </div>
            <form method = "POST" action={`http://localhost:4005/api/restaurants/restaurant/${restaurant.restaurant_id}?_method=DELETE`}>
                <Button type="submit" className="btn btn-danger">Delete</Button>
            </form>
            <div>
                <Link to={`Update/${restaurant.restaurant_id}`}><Button variant='danger'>Update Restaurant</Button></Link>
            </div>
            </div>
        </div>
    )
}