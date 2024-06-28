

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Cardproduc() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://hibeautycr.com/cdn/shop/files/IMG-8492_1100x.jpg?v=1697258379" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
     
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Cardproduc;
