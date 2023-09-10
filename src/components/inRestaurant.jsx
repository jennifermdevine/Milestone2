/* eslint-disable no-unused-vars */
import {useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import { useParams,Link,Route,Outlet,UseNavigate} from 'react-router-dom'

export default function InRestaurant(props) {
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
        <div className="restaurants">
            <h1 className="restRec">Restaurant</h1>
            <ul className="restaurantList">
                    <li  style={{paddingBottom:'25px'}}>
                        <div>Name: {restaurant.name}</div>
                        <div>Protein: {restaurant.protein}</div>
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
            {/* <form method="POST" action={`/places/${data.id}?_method=PUT`}></form> */}

        </div>

    )
}