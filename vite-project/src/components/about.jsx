

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function About() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>THE ORDINARY </Card.Title>
        <Card.Text>
        Kit para Acné The Ordinary The Acne Set
        </Card.Text>
        <Button variant="primary"></Button>
      </Card.Body>
    </Card>
  );
}

export default About;