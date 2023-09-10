import {useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import livingRoom from '../livingroom.png'
import {BrowserRouter as Link} from 'react-router-dom'


export default function RecipesList() {
    const [recipes, setRecipes] = useState([])

    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch('https://in-or-out.onrender.com/api/recipes/allRecipes')
            const json = await response.json()
            setRecipes(json)
        }
        fetchData()
    }, [] )

    return (
        <div className="recipePage">
            <img src={livingRoom} alt="a cozy living room" width="550px" height="650px" />
        
        <div className="recipes">
            <h1 className="recipeRec">Recipes List</h1>
                    
            <ul className="recipesList">
                {recipes.map((recipe,index) => (
                    <li key={index} style={{paddingBottom:'25px'}}>
                        
                        <Link className="a" to={`recipe/${recipe.recipe_id}`}>
                    <li key={index} style={{paddingBottom:'25px'}}>
                        <div>Name: {recipe.name}</div>
                        <div>Protein: {recipe.protein}</div>
                    </li>
                    </Link>
                        
                    </li>
                ))}
            </ul>

            <div>
                <Link to='/recipes'><Button variant='danger'>Back to Recommendations</Button></Link>
            </div>
            <br />
            <div><Link to='/recipes/addRecipe'><Button variant="danger">Add recipe</Button></Link></div>
            
           
        </div>
        </div>
       
    )
} 