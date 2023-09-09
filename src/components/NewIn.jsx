import {useState,useEffect} from 'react'
import livingRoom from '../livingroom.png'
import Button from 'react-bootstrap/Button';
import { UseParams, Link, Route, Outlet, UseNavigate } from 'react-router-dom'


    // const randomNum = 1000

export default function NewIn() {

    const [recipes, setRecipes] = useState([])
    const [recipe, setRecipe] = useState([])
    const [randomNum, setRandomNum] = useState({
        "num": 1
    })

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4005/api/recipes')
            const json = await response.json()
            setRecipes(json)
            
        }
         fetchData()
         
        
    }, [])


        console.log(recipes)
            //   while(Object.values(randomNum)[0] > recipes.length){
            //         randomNum.num = Math.floor(Math.random() * 100) + 1 

            //     }
  
            
            // console.log(Object.values(randomNum)[0])

    // useEffect(() => {
    //     const fetchData = async () => {
   
            
    //         const response = await fetch(`http://localhost:4005/api/recipes/recipe/${randomNum.num}`)
    //         const json = await response.json()
    //         setRecipe(json)
    //     }
    //      fetchData()
    // }, [])




    return (
        <div className="recipePage">
            <img src={livingRoom} alt="a cozy living room" width="550px" height="650px" />
        <div className="recipes">
            <h1 className="recipeRec">Random Recipe</h1> 
            <h2>{recipes[0].protein}</h2>
            <ul className="recipeList">

                {/* {recipes.map((recipe, index) => ( */}

                
               
                {/* key={recipes[randomNum].recipe_id} */}
                    {/* <Link to={`recipe/${recipes.recipe_id}`}>
                        <li key={recipes.recipe_id} style={{ paddingBottom: '25px' }}>
                            <h2>Name: {recipes.name}</h2>
                            <h2>Protein: {recipes.protein}</h2>
                        </li>
                    </Link> */}

                {/* ))} */}
            </ul>
            <div>
                <Link to='/recipes/list'><Button variant="danger">List</Button></Link>
            </div>




            {/* <Outlet/> */}
        </div>
        </div>
       
    )
}