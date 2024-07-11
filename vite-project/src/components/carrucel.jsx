import Carousel from 'react-bootstrap/Carousel';
function Carrucel() {
  return (

    <>
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
          
          src="https://phantom-telva.unidadeditorial.es/eada5ff25cbf460299dab2addb936219/crop/0x58/2045x1207/resize/1280/f/webp/assets/multimedia/imagenes/2020/11/16/16055349700150.jpg"
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
          src="https://rembeauty.com/cdn/shop/files/HP_Desktop_-_bronzer.jpg?v=1718232031&width=1920"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p>
           
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    

    
    </>

  );
}

export default Carrucel;