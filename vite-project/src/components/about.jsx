
import "../styles/about.css";
import Card from 'react-bootstrap/Card';
import { Container, Row} from 'react-bootstrap';

function About() {
  return (
    <Container>
      <Row>
     
          <Card className='custom-card'>
            <Card.Img className='custom-image' variant="top" src="https://i.pinimg.com/736x/d7/b9/a0/d7b9a03cc7f88f8372c739047fe6e294.jpg" />
            <Card.Body>
              <Card.Title>ABOUT US</Card.Title>
              <Card.Text>
                We know that how you look plays a significant part in your day to day life. We have a dedicated team who spend time building relationships with our brands which means we will always provide you with the best advice possible. You can also connect with us on Social Media through Facebook. We love to hear from you about your experiences, send over your beauty hauls, favorite products, reviews, videos or photos and we will be sure to reach out.
              </Card.Text>
            </Card.Body>
          </Card>
       
          <Card className='custom-card'>
            <Card.Img className='custom-image' variant="top" src="https://rembeauty.com/cdn/shop/files/HP_Desktop_-_bronzer.jpg?v=1718232031&width=1920" />
            <Card.Body>
              <Card.Title>How We Curate</Card.Title>
              <Card.Text>
                We source and test all our products ourselves! Our dedicated team carefully tests every single product you see in our stores, across various metrics including ingredients, texture, scent, packaging, user experience and results. We highly value customer satisfaction and want all our customers to enjoy our products, so if we don’t like what we experience, the items will never be in our stores.
              </Card.Text>
            </Card.Body>
          </Card>
       
          <Card className='custom-card'>
            <Card.Img className='custom-image' variant="top" src="https://i.pinimg.com/736x/4a/6f/a3/4a6fa33cd4ea61f7bb756e46715bf53b.jpg" />
            <Card.Body>
              <Card.Title>Our Products</Card.Title>
              <Card.Text>
                All our products are guaranteed to be 100% AUTHENTIC, made in and directly imported from South Korea. We are the official distributor of our brands.
              </Card.Text>
            </Card.Body>
          </Card>
        
      </Row>
    </Container>
  );
}

export default About;