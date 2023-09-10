import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'


function UpdateRecipe() {
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
    <div> 
        



        <Form className="form" method="POST" action={`http://localhost:4005/api/recipes/recipe/${recipe.recipe_id}?_method=PUT`}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Name:</Form.Label>
                    <input className='form-control' id='name' name='name'   defaultValue={recipe.name} required/>
                    <Form.Label>Image:</Form.Label>
                    <input className="form-control" id="img" name="img" defaultValue={recipe.img}/>
                </Form.Group>
            </Row>
            <Form.Label>What protein is in the recipe?</Form.Label>
            <Form.Select aria-label="Default select example"  defaultValue={recipe.protein} id='protein' name='protein' className="dropdown" >
                <option value="beef" id='protein' name='protein'>Beef</option>
                <option value="chicken" id='protein' name='protein'>Chicken</option>
                <option value="fish" id='protein' name='protein'>Fish</option>
                <option value="pork" id='protein' name='protein'>Pork</option>
                <option value="meatless" id='protein' name='protein'>Meatless</option>
            </Form.Select>
            <Form.Label>Ingredients:
                <input className="form-control" id="ing1" name="ing1" required defaultValue={recipe.ing1}/>
                <input className="form-control" id="ing2" name="ing2" defaultValue={recipe.ing2}/>
                <input className="form-control" id="ing3" name="ing3" defaultValue={recipe.ing3}/>
                <input className="form-control" id="ing4" name="ing4" defaultValue={recipe.ing4}/>
                <input className="form-control" id="ing5" name="ing5" defaultValue={recipe.ing5}/>
            </Form.Label>
            <br />
            <br />

            
            <Button variant="danger"   type="submit" value="submit" >Update Recipe </Button>
                    

            <Link to='/recipes'>
            <Button variant="danger">
                Back to Recommendations
            </Button>
            </Link>
        </Form>     
    </div>
    )
}

export default UpdateRecipe;