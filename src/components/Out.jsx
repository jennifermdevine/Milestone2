import {useState,useEffect} from 'react'


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
        <div className="restaurants">
            <h1 className="restRec">Restaurant Recommendations</h1>
            <ul className="restaurantList">
                {restaurants.map((restaurant,index) => (
                    <li key={index} style={{paddingBottom:'25px'}}>
                        <div>Name: {restaurant.name}</div>
                        <div>Protein: {restaurant.protein}</div>
                    </li>
                ))}
             </ul>
        </div>

    )
} 