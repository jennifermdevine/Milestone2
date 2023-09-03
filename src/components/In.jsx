import {useState,useEffect} from 'react'


export default function In() {
    const [recipes, setRecipes] = useState([])

    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4005/api/recipes')
            const json = await response.json()
            setRecipes(json)
        }
        fetchData()
    }, [] )

    return (
        <div className="recipes">
             <h1 className="recipeRec">Recipe Recommendations</h1>
             <ul className="recipeList">
                {recipes.map((recipe,index) => (
                    <li key={index} style={{paddingBottom:'25px'}}>
                        <div>Name: {recipe.name}</div>
                        <div>Protein: {recipe.protein}</div>
                    </li>
                ))}
             </ul>
        </div>
       
    )
} 