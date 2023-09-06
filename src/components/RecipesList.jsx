import {useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import InRecipe from './InRecipe'
import livingRoom from '../livingroom.png'
import {BrowserRouter as Router, Link, Route,Routes} from 'react-router-dom'


export default function RecipesList() {
    const [recipes, setRecipes] = useState([])

    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4005/api/recipes/allRecipes')
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
                    
            <ul className="recipeList">
                {recipes.map((recipe,index) => (
                    <li key={index} style={{paddingBottom:'25px'}}>
                        
                        <Link to={`recipe/${recipe.recipe_id}`}>
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