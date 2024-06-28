import Carousel from 'react-bootstrap/Carousel';
function Carrucel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img id='image'
          className="d-block w-100"
          src="https://es.lorealparisusa.com/-/media/project/loreal/brand-sites/oap/americas/us/beauty-magazine/2021/january/1-27/oily-skin-care-donts/11-things-you-shouldn-t-do-if-you-have-oily-skin-hero-bmag.jpg?rev=f7ff73ccbc374c279f16c10e82612a2f&cx=0.49&cy=0.54&cw=2000&ch=815&hash=7AB9373B8D557FB77266F497ED3EC115D16B60DD"
          alt="First slide"/>
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id='image'
          className="d-block w-100"
          src="https://www.lavanguardia.com/files/image_948_465/files/fp/uploads/2021/02/16/602bd006d3744.r_d.1963-1506-2453.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id='image'
          className="d-block w-100"
          src="https://lifesolutions.com.pe/wp-content/uploads/2021/09/TIPOS-DE-PIELES.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p>
           
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrucel;