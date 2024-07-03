// esta son las cards para mostrar los productos en la pagina principal 

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Cardproduc() {
  return ( 
    <div id='cardtamano'>
    
      <Card.Img variant="top" src="https://hibeautycr.com/cdn/shop/files/IMG-8492_1100x.jpg?v=1697258379" />
      <Card.Body>
        <Card.Title>THE ORDINARY</Card.Title>
        <Card.Text>
     
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item></ListGroup.Item>
        <ListGroup.Item></ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#"></Card.Link>
        <Card.Link href="#"></Card.Link>
      </Card.Body>
    
    </div>
  );
}


export default Cardproduc;
