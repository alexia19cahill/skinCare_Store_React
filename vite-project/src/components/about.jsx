


import Card from 'react-bootstrap/Card';

function About() {
  return (
    <Card id='card'>
      <Card.Img id='images' variant="top" src="https://rembeauty.com/cdn/shop/files/HP_Desktop_-_bronzer.jpg?v=1718232031&width=1920" />
      <Card.Body>
        <Card.Title> ABOUT US </Card.Title>
        <Card.Text>
        We know that how you look plays a significant part in your day to day life and we will always respect that. We are always on the lookout for innovative new brands and products to provide you with confidence to tackle the day ahead.

We have a dedicated team who spend time building relationships with our brands which means we will always provide you with the best advice possible. We are passionate about delivering excellence and setting high benchmarks in everything we do. We love the products that we sell and we work together as a team to make a difference. Our dedicated blog is updated daily and contains the latest tips, advice and beauty news from re-creating celebrity looks to the latest beauty products needs to know.

You can also connect with us on Social Media through Facebook . We love to hear from you about your experiences, send over your beauty hauls, favorite products, reviews, videos or photos and we will be sure to reach out.
        <Card.Title> How We Curate  </Card.Title>
       
We source and test all our products ourselves! Our dedicated team carefully tests every single product you see in our stores, across various metrics including ingredients, texture, scent, packaging, user experience and results.

We highly value customer satisfaction and want all our customers enjoy our products, so if we don’t like what we experience, the items will never be in our stores.
        </Card.Text>
        <Card.Title> Our Products  </Card.Title>  

        <Card.Text>
All our products are guaranteed to be 100% AUTHENTIC, made in and directly imported from South Korea. We are the official distributor of our brands
</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default About;