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
        <div>
             <h1>Recipe Recommendations</h1>
             <ul>
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