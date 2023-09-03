import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function AddFoodie() {
  return (
    <div> 
        <Form className="form">
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control placeholder="Your Name"/>
                </Form.Group>
            </Row>
            <Form.Select aria-label="Default select example" className="dropdown">
                <option>What protein are you craving?</option>
                <option value="1">Beef</option>
                <option value="2">Chicken</option>
                <option value="3">Fish</option>
                <option value="4">Pork</option>
                <option value="5">Search Meatless Recipes</option>
            </Form.Select>
            <br />
            <br />
            <Button variant="danger" type="submit">
                Add Foodie
            </Button>
        </Form>     
    </div>
    )
}

export default AddFoodie;