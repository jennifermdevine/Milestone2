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
                        <Form.Label>Image:</Form.Label>
                        <input className="form-control" id="img" name="img" />
                    </Form.Group>
                </Row>
                <Form.Label>What protein does the recipe contain?</Form.Label>
                <Form.Select aria-label="Default select example" placeholder='Protein' id='protein' name='protein' className="dropdown" >
                
                    <option value="beef" id='protein' name='protein'>Beef</option>
                    <option value="chicken" id='protein' name='protein'>Chicken</option>
                    <option value="fish" id='protein' name='protein'>Fish</option>
                    <option value="pork" id='protein' name='protein'>Pork</option>
                    <option value="meatless" id='protein' name='protein'>Meatless</option>
                </Form.Select>
                <Form.Label>Ingredients:
                    <input className="form-control" id="ing1" name="ing1" required/>
                    <input className="form-control" id="ing2" name="ing2" />
                    <input className="form-control" id="ing3" name="ing3" />
                    <input className="form-control" id="ing4" name="ing4" />
                    <input className="form-control" id="ing5" name="ing5"/>
                </Form.Label>
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