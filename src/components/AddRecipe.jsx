import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link} from 'react-router-dom'


function AddRecipe() {
  return (
    <div> 
        



        <Form className="form" method="POST" action='http://localhost:4005/api/recipes'>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Name:</Form.Label>
                    <input className='form-control' placeholder="Recipe Name" id='name' name='name' required/>
                </Form.Group>
            </Row>
            <Form.Select aria-label="Default select example" placeholder='Protein' id='protein' name='protein' className="dropdown" >
            <option>What protein is in the recipe?</option>
                <option value="beef" id='protein' name='protein'>Beef</option>
                <option value="chicken" id='protein' name='protein'>Chicken</option>
                <option value="fish" id='protein' name='protein'>Fish</option>
                <option value="pork" id='protein' name='protein'>Pork</option>
                <option value="meatless" id='protein' name='protein'>Meatless</option>
            </Form.Select>
            <br />
            <br />

            
            <Button variant="danger"   type="submit" value="submit" >Add Recipe </Button>
                    

            <Link to='/recipes'>
            <Button variant="danger">
                Back to Recommendations
            </Button>
            </Link>
        </Form>     
    </div>
    )
}

export default AddRecipe;