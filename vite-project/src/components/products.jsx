// este componete es para mostrar los productos en la pagina al usuario
// importacion de useEffect y useState desde react
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "../styles/card.css"


import { useState, useEffect } from "react";
// importacion de axios 
import axios from "axios";
// importacion de las funciones llamadosPost y llamadosDelete 
import { llamadoPost, llamadoDelete } from "../services/llamados";
// importacion de la hoja de estilos
import "../index.css"
// esta funcion devuelve la información subida con el POST
function Products() {
  const [producto, setProducto] = useState("");
  const [precio, setPrecio] = useState("");
  const [informacion, setinformacion] = useState("");
    const [imagenurl, setimgenurl] = useState("");
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const mostrarProductos = async () => {
      try {
        const response = await axios.get("http://localhost:3001/productos");
        setDatos(response.data);
        console.log("funciona", response.data);
      } catch (error) {
        console.error("Hubo un error", error);
      }
    };

    mostrarProductos();
  }, []);

  const postDatos = async () => {
    if (producto !== "" && precio !== "") {
      const productosDatos = {
        producto: producto,
        precio: precio,
        informacion:informacion,
        imagenurl:imagenurl,
      };
      console.log(productosDatos);
      await llamadoPost(productosDatos);
      actualizarProductos();
      setDatos([...datos,productosDatos])
    }
  };

  const eliminarProducto = async (id) => {


  await llamadoDelete(id)
  setDatos(datos.filter(element=>element.id !== id) )
  };

  const actualizarProductos = async () => {
    try {
      const response = await axios.get("http://localhost:3001/productos");
      setDatos(response.data);
    } catch (error) {
      console.error(" error", error);
    }
  };

  return (
    <>

    <div className='form-container'>
    
    <div id="formulario2">

    <input id="imagenurl" name="myInput" placeholder="URL de la img" value={imagenurl} onChange={e => setimgenurl(e.target.value)} />
      <br /><br />
      <input id="producto" name="myInput" placeholder="Nombre de producto" value={producto} onChange={e => setProducto(e.target.value)} />
      <br /><br />
      <input id="precio" name="myInput" placeholder="Precio" value={precio} onChange={e => setPrecio(e.target.value)} />
      <br /><br />
      <input id="informacion" name="myInput" placeholder="información" value={informacion} onChange={e => setinformacion(e.target.value)} />
      <br /><br />
      <button id="boton2" onClick={postDatos}>enviar</button>
  </div>
    
    
    </div>

<div className='grid-container'>
      {datos.map((item, index) => (
        <div key={index}>

<div className='body'>

        <Card className='card' id='2cardtamano'>
      <Card.Img variant="top" src={item.imagenurl} />
      <Card.Body className='card-body'>
        <Card.Title></Card.Title>
        <Card.Text>
        <p>Producto: {item.producto}</p>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><p>Precio: {item.precio}</p></ListGroup.Item>
      </ListGroup>
      <Card.Body>
          <button onClick={() => eliminarProducto(item.id)}>Eliminar</button>
         
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>

</div>

          
       
        </div>
      ))}
</div>
    </>
  
  );
}

export default Products;
