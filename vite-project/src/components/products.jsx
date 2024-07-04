//importar de bibliotecas de React y Botstrap
import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
// importar funciones para llamadas a la API
import { llamadoPost, llamadoDelete, llamadoPut } from "../services/llamados";
// el css
import "../styles/card.css";
import "../index.css";

// componente 
function Products() {
  // estados para manejar los inputs y datos
  const [producto, setProducto] = useState(""); // estado par el nombre del producto
  const [precio, setPrecio] = useState(""); // estado para el precio
  const [informacion, setInformacion] = useState(""); // estado para la informacion
  const [imagenUrl, setImagenUrl] = useState(""); // estado para la UrL 
  const [datos, setDatos] = useState([]); // estado para almacenar los datos de los productos
  // const [productoActual, setProductoActual] = useState(null); // almacenar un producto que se está editando
  const [mostrModal, setMostrModal] = useState(false); // estado para q se vea el modal

  // useEffect para obtener los productos al poner el componente
  useEffect(() => {
    // una funion asincrona  para obtener los productos del sever
    const mostrarProductos = async () => {
      try {
        const response = await axios.get("http://localhost:3001/productos"); // Petición get a api
        setDatos(response.data); // tiene los datos obtenidos en el estado
      } catch (error) {
        console.error("Hubo un error", error); 
      }
    };

    mostrarProductos(); // Llamar la funcion de  mostrar los productos
  }, []);

  // funcion para enviar loas nurvos datos al servidpr
  const postDatos = async () => {
    if (producto !== "" && precio !== "") { // Verificar que los campos no estén vacíos
      const productosDatos = {
        producto: producto,
        precio: precio,
        informacion: informacion,
        imagenurl: imagenUrl,
      };
      await llamadoPost(productosDatos); // llamada a la funcion de enviar datos
      actualizarProductos(); //actualizar la lista de productos
      setDatos([...datos, productosDatos]); // añadir el nuevo producto a los datos recientes

    }
  };

  // funcion de eliminar un producto
  const eliminarProducto = async (id) => {
    await llamadoDelete(id); // llamar  a la funcion para elimina
    setDatos(datos.filter(element => element.id !== id)); 
  };

  // se tiene los datos actualizados
  const actualizarProductos = async () => {
    try {
      const response = await axios.get("http://localhost:3001/productos"); // Petición get a la api
      setDatos(response.data);
    } catch (error) {
      console.error("Hubo un error", error); 
    }
  };

  // la funcio de aqui prepara para editar
  const editarProducto = (id) => {
   
    // setProductoActual(producto); // tiene el producto para editar
    // setProducto(producto.producto); 
    // setPrecio(producto.precio); 
    // setInformacion(producto.informacion); 
    // setImagenUrl(producto.imagenurl); 
   localStorage.setItem("id",id)
 
    setMostrModal(true); // mostrar modal

   
  };

  // para guardar los cambios qu se editaron
  const guardarCambios = async () => {
  const id = localStorage.getItem("id")
  
    const productosDatos = {
      producto: producto,
      precio: precio,
      informacion: informacion,
      imagenurl: imagenUrl,

    };
     console.log(id,productosDatos);
    llamadoPut(id, productosDatos); // llama a la func de actualzar los datos
    actualizarProductos(); // para actualizar la lista
    setMostrModal(false); // oculatra el modal
  };

  return (
    <>
      <div className='form-container'>
        <div id="formulario2">
          <input id="imagenurl" name="myInput" placeholder="URL de la img" value={imagenUrl} onChange={e => setImagenUrl(e.target.value)} />
          <br /><br />
          <input id="producto" name="myInput" placeholder="Nombre de producto" value={producto} onChange={e => setProducto(e.target.value)} />
          <br /><br />
          <input id="precio" name="myInput" placeholder="Precio" value={precio} onChange={e => setPrecio(e.target.value)} />
          <br /><br />
          <input id="informacion" name="myInput" placeholder="Información" value={informacion} onChange={e => setInformacion(e.target.value)} />
          <br /><br />
          <button id="boton2" onClick={postDatos}>Enviar</button>
        </div>
      </div>

      <div className='grid-container'>
        {datos.map((item, index) => (
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
              <Card.Body>
                <button onClick={() => eliminarProducto(item.id)}>Eliminar</button>
                <button onClick={() => editarProducto(item.id)}>Editar</button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <Modal show={mostrModal} onHide={() => setMostrModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input id="imagenurl" name="myInput" placeholder="URL de la img" value={imagenUrl} onChange={e => setImagenUrl(e.target.value)} />
          <br /><br />
          <input id="producto" name="myInput" placeholder="Nombre de producto" value={producto} onChange={e => setProducto(e.target.value)} />
          <br /><br />
          <input id="precio" name="myInput" placeholder="Precio" value={precio} onChange={e => setPrecio(e.target.value)} />
          <br /><br />
          <input id="informacion" name="myInput" placeholder="Información" value={informacion} onChange={e => setInformacion(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setMostrModal(false)}>Cerrar</Button>
          <Button variant="primary" onClick={guardarCambios}>Guardar cambios</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Products;
          
       

