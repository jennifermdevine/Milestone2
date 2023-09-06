import {useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import { useParams,Link,Route,Outlet,UseNavigate} from 'react-router-dom'

export default function InRecipe(props) {
    const [person, setPerson] = useState([''])
    const params = useParams();

    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4005/api/people/foodie/${JSON.stringify(params)}`)
            const json = await response.json()
            setPerson(json)
        }
        fetchData()
    }, [] )

  

    return (
        <div className="restaurants">
            <h1 className="restRec">Foodie</h1>
            <ul className="recipeList">
                    <li  style={{paddingBottom:'25px'}}>
                        <div>Name: {person.name}</div>
                        <div>Protein: {person.protein}</div>
                    </li> 
            </ul>

            

        
            <form method = "POST" action={`http://localhost:4005/api/people/${person.user_id}?_method=DELETE`}>
                <Button type="submit" className="btn btn-danger">Delete</Button>
            </form>

             <div>
                <Link to={`Update/${person.user_id}`}><Button variant='danger'>Update Foodie</Button></Link>
            </div>
            
            
        </div>

    )
} 