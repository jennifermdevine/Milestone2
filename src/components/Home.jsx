import livingRoom from '../livingroom.png'
import restaurant from '../restaurant.png'
import {useState,useEffect} from 'react'
import { UseParams,Link,Route,Routes,Outlet,UseNavigate} from 'react-router-dom'



function Home() {
    const [people, setPeople] = useState([])

    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4005/api/people')
            const json = await response.json()
            setPeople(json)
            
        }
        fetchData()
    }, [] )

    return (
        <div>
            <div className="home">
                <div className="diningIn">
                    <h1>Are you dining in?</h1>
                    <Link className="a" to="/recipes"><img src={livingRoom} alt="a cozy living room" width="300px" height="450px" /></Link>
                </div>
                <div className="goingOut">
                    <Link to="/restaurants"><img src={restaurant} alt="a dark and intimate restaurant" width="300" height="450px"/></Link>
                    <h1 className="out">...or going out?</h1>
                </div>
            </div>
        </div>
    )
}

export default Home

