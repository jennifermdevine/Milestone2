
import livingRoom from '../livingroom.png'
import restaurant from '../restaurant.png'
import AddFoodie from './AddFoodie'
import UserCards from './UserCards'
import {useState,useEffect} from 'react'

import Button from 'react-bootstrap/Button';
import { UseParams,Link,Route,Outlet,UseNavigate} from 'react-router-dom'



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
        <div className="home">
            <div className="diningIn">
                <h1>Are you dining in?</h1>
                <img src={livingRoom} alt="a cozy living room" width="500px" />
            </div>
            <AddFoodie/>
            <div className="goingOut">
                <img src={restaurant} alt="a dark and intimate restaurant" width="300" />
                <h1 className="out">...or going out?</h1>
            </div>
           

            <div>
            <h1 className="recipeRec">Foodies</h1>
             <ul className="recipeList">

                {people.map((person,index) => (
                    
                    <Link to={`foodie/${person.user_id}`}>
                    <li key={index} style={{paddingBottom:'25px'}}>
                        <div>Name: {person.name}</div>
                        <div>Protein: {person.protein}</div>
                    </li>
                    </Link>
                    
                ))}
             </ul>
            </div>
         
        </div>
        
    )}

export default Home

