import { useEffect,useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "../styles/card.css";
function MostrarProductos() {

    const [datos2, setDatos2] = useState([]); // estado para almacenar los datos de los productos

  // useEffect para obtener los productos al poner el componente
  useEffect(() => {
    // una funion asincrona  para obtener los productos del sever
    const MostrarProductos = async () => {
      try {
        const response = await axios.get("http://localhost:3001/productos"); // Petición get a api
        setDatos2(response.data); // tiene los datos obtenidos en el estado
      } catch (error) {
        console.error("Hubo un error", error); 
      }
    };

    MostrarProductos(); // Llamar la funcion de  mostrar los productos
  }, []);


  return (
 
    <div className='grid-container'>
    {datos2.map((item, index) => (
      <div key={index} className='body'>
        <Card className='card' id='2cardtamano'>
          <Card.Img variant="top" src={item.imagenurl} />
          <Card.Body className='card-body'>
            <Card.Title>{item.producto}</Card.Title>
            <Card.Text>
              <p>Producto: {item.producto}</p>
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item><p>Precio: {item.precio}</p></ListGroup.Item>
          </ListGroup>
          <Card.Text>
              <p>informacion: {item.informacion}</p>
            </Card.Text>
          <Card.Body>
        
          </Card.Body>
        </Card>
      </div>
    ))}
  </div>
  )
}

export default MostrarProductos
