import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom'


function AddRestaurant() {
  return (
    <div>

        <Form className="form" method="POST" action='http://localhost:4005/api/restaurants'>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Name:</Form.Label>
                    <input className='form-control' placeholder="Restaurant Name" id='name' name='name' required/>
                </Form.Group>
            </Row>
            <Form.Label>What protein does the restaurant offer?</Form.Label>
            <Form.Select aria-label="Default select example" placeholder='Protein' id='protein' name='protein' className="dropdown" >

                <option value="beef" id='protein' name='protein'>Beef</option>
                <option value="chicken" id='protein' name='protein'>Chicken</option>
                <option value="fish" id='protein' name='protein'>Fish</option>
                <option value="pork" id='protein' name='protein'>Pork</option>
                <option value="meatless" id='protein' name='protein'>Meatless</option>
            </Form.Select>

            <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>year_founded:</Form.Label>
                    <input className='form-control'types ='number' placeholder="year_founded" id='year_founded' name='year_founded' required/>
                </Form.Group>
            <br />
            <br />


            <Button variant="danger"   type="submit" value="submit" >Add Restaurant </Button>


            <Link to='/restaurants'>
            <Button variant="danger">
                Back to Recommendations
            </Button>
            </Link>
        </Form>
    </div>
    )
}

export default AddRestaurant