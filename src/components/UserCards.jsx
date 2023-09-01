import Card from 'react-bootstrap/Card';

function UserCard() {
    return (
    <div className="userCards">
        <Card border="danger" style={{ width: '10rem' }}>
            <Card.Body>
                <Card.Title>Elva</Card.Title>
            </Card.Body>
        </Card>
        <Card border="danger" style={{ width: '10rem' }}>
            <Card.Body>
                <Card.Title>Matthew</Card.Title>
            </Card.Body>
        </Card>
        <Card border="danger" style={{ width: '10rem' }}>
            <Card.Body>
                <Card.Title>Zoren</Card.Title>
            </Card.Body>
        </Card>
        <Card border="danger" style={{ width: '10rem' }}>
            <Card.Body>
                <Card.Title>Jennifer</Card.Title>
            </Card.Body>
        </Card>
    </div>
    )
}

export default UserCard;