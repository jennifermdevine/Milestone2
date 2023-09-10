import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'


function UpdateRestaurant() {
    const [restaurant, setRestaurant] = useState([''])
    const params = useParams();

    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4005/api/restaurants/restaurant/${JSON.stringify(params)}`)
            const json = await response.json()
            setRestaurant(json)
        }
        fetchData()
    }, [] )

  return (
    <div>




        <Form className="form" method="POST" action={`http://localhost:4005/api/restaurants/restaurant/${restaurant.restaurant_id}?_method=PUT`}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Name:</Form.Label>
                    <input className='form-control' id='name' name='name'   defaultValue={restaurant.name} required/>
                    <Form.Label>Image:</Form.Label>
                    <input className="form-control" id="img" name="img" placeholder="Restaurant Image" defaultValue={restaurant.img} />
                </Form.Group>
            </Row>
            <Form.Label>What protein is in the restaurant?</Form.Label>
            <Form.Select aria-label="Default select example"  defaultValue={restaurant.protein} id='protein' name='protein' className="dropdown" >
                <option value="beef" id='protein' name='protein'>Beef</option>
                <option value="chicken" id='protein' name='protein'>Chicken</option>
                <option value="fish" id='protein' name='protein'>Fish</option>
                <option value="pork" id='protein' name='protein'>Pork</option>
                <option value="meatless" id='protein' name='protein'>Meatless</option>
            </Form.Select>

            <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Favorite Dishes</Form.Label>
                    <input className='form-control' placeholder="Favorite Dish" id='dish1' name='dish1' defaultValue={restaurant.dish1} required/>
                    <input className='form-control' placeholder="Favorite Dish" id='dish2' name='dish2' defaultValue={restaurant.dish2}/>
                    <input className='form-control' placeholder="Favorite Dish" id='dish3' name='dish3' defaultValue={restaurant.dish3}/>
                </Form.Group>
            <br />
            <br />


            <Button variant="danger"   type="submit" value="submit" >Update Restaurant </Button>


            <Link to='/restaurants'>
            <Button variant="danger">
                Back to Recommendations
            </Button>
            </Link>
        </Form>
    </div>
    )
}

export default UpdateRestaurant;