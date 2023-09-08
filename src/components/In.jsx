/* eslint-disable no-unused-vars */
import {useState,useEffect} from 'react'
import livingRoom from '../livingroom.png'
import Button from 'react-bootstrap/Button';
import { UseParams, Link, Route, Outlet, UseNavigate } from 'react-router-dom'


export default function In() {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4005/api/recipes')
            const json = await response.json()
            setRecipes(json)

        }
        fetchData()
    }, [])

    return (
        <div className="recipePage">
            <img src={livingRoom} alt="a cozy living room" width="550px" height="650px" />
        <div className="recipes">
            <h1 className="recipeRec">Recipe Recommendations</h1>
            <ul className="recipeList">

                {recipes.map((recipe, index) => (


                    <Link to={`recipe/${recipe.recipe_id}`}>
                        <li key={index} style={{ paddingBottom: '25px' }}>
                            <div>Name: {recipe.name}</div>
                            <div>Protein: {recipe.protein}</div>
                        </li>
                    </Link>

                ))}
            </ul>
            <div>
                <Link to='/recipes/list'><Button variant="danger">List</Button></Link>
            </div>




            {/* <Outlet/> */}
        </div>
        </div>

    )
}