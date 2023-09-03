import {useState,useEffect} from 'react'


export default function Out() {
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
             <h1>Restaurant Recommendations</h1>
             
        </div>
       
    )
} 