

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Cardproduc() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://hibeautycr.com/cdn/shop/files/IMG-8492_1100x.jpg?v=1697258379" />
      <Card.Body>
        <Card.Title>THE ORDINARY</Card.Title>
        <Card.Text>
     
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>The Ordinary The Acne Set</ListGroup.Item>
        <ListGroup.Item>El conjunto contiene:
Glucoside Foaming Cleanser gel limpiador 50 ml
Solución de sérum facial con ácido salicílico al 2% 30 ml
Factores Hidratantes Naturales + Gel-Crema Hidratante Beta Glucan 30ml
</ListGroup.Item>
       
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    
  );
}

export default Cardproduc;
