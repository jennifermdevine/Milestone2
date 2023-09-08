/* eslint-disable no-unused-vars */
import {useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import livingRoom from '../livingroom.png'
import { useParams,Link,Route,Outlet,UseNavigate} from 'react-router-dom'

export default function InRecipe(props) {
    const [recipe, setRecipe] = useState([''])
    const params = useParams();

    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4005/api/recipes/recipe/${JSON.stringify(params)}`)
            const json = await response.json()
            setRecipe(json)
        }
        fetchData()
    }, [] )



    return (
        <div className="recipePage">
            <img src={livingRoom} alt="a cozy living room" width="550px" height="650px" />
        <div className="restaurants">
            <h1 className="restRec">Recipe</h1>
            <ul className="recipeList">
                    <li style={{paddingBottom:'25px'}}>
                        <div>Name: {recipe.name}</div>
                        <div>Protein: {recipe.protein}</div>
                    </li>
            </ul>

            <div>
                <Link  to='/recipes'><Button variant='danger'>Back to Recommendations</Button></Link>
            </div>

            <div>
                <Link to='/recipes/list'><Button variant='danger'>Back to Recipe List</Button></Link>
            </div>


            <form method = "POST" action={`http://localhost:4005/api/recipes/recipe/${recipe.recipe_id}?_method=DELETE`}>
                <Button type="submit" className="btn btn-danger">Delete</Button>
            </form>

            <div>
                <Link to={`Update/${recipe.recipe_id}`}><Button variant='danger'>Update Recipe</Button></Link>
            </div>
            {/* <form method="POST" action={`/places/${data.id}?_method=PUT`}></form> */}

        </div>
        </div>

    )
}