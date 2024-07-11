//importar de bibliotecas de React y Botstrap
import  { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Swal from "sweetalert2";
// importar funciones para llamadas a la API
import { llamadoPost, llamadoDelete, llamadoPut } from "../services/llamados";
// el css
import "../styles/card.css";
import "../index.css";
import Filter from "../components/filter";

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
 
  const [filtro, setFiltro] = useState(""); // estado para el término de búsqueda
  const [datosFiltro, setDatosFiltro] = useState([]); // estado para almacenar los datos filtrados
  

  // useEffect para obtener los productos al poner el componente
  useEffect(() => {
    // una funion asincrona  para obtener los productos del sever
    const mostrarProductos = async () => {
      try {
        const response = await axios.get("http://localhost:3001/productos"); // Petición get a api
        setDatos(response.data); // tiene los datos obtenidos en el estado
          setDatosFiltro(response.data); // almacenar los datos obtenidos en el estado filtro
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
      setDatosFiltro([...datos, productosDatos]); // añadir el nuevo producto a los datos filtrados

    }
  };

  // funcion de eliminar un producto
  const eliminarProducto = async (id) => {
    Swal.fire({
      title: '¿are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'yes, delete'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await llamadoDelete(id); // llamar a la funcion para eliminar
        setDatos(datos.filter(element => element.id !== id)); 
        setDatosFiltro(datos.filter(element => element.id !== id));
        Swal.fire(
          '¡eliminated!',
          
        )
      }
    })
  };

  // se tiene los datos actualizados
  const actualizarProductos = async () => {
    try {
      const response = await axios.get("http://localhost:3001/productos"); // Petición get a la api
      setDatos(response.data);
        setDatosFiltro(response.data);
    } catch (error) {
      console.error("Hubo un error", error); 
    }
  };

  // la funcio de aqui prepara para editar
  const editarProducto = (id) => {
   
   
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

    // función para manejar la búsqueda
  const buscar = () => {
    const resultados = datos.filter(item => 
      item.producto.toLowerCase().match(filtro.toLowerCase())
    );
    setDatosFiltro(resultados);
    console.log(resultados);
  };

  return (
   
<>


<div className="products">

     <Filter filtro={filtro} setFiltro={setFiltro} buscar={buscar} />
      <div className='form-container'>
        <div id="formulario2">
          <div>
           
        
          <input id="imagenurl" name="myInput" placeholder="URL de la img" value={imagenUrl} onChange={e => setImagenUrl(e.target.value)} />
          <br /><br />
          <input id="producto" name="myInput" placeholder="Nombre de producto" value={producto} onChange={e => setProducto(e.target.value)} />
          <br /><br />
          <input id="precio" name="myInput" placeholder="Precio" value={precio} onChange={e => setPrecio(e.target.value)} />
          <br /><br />
          <input id="informacion" name="myInput" placeholder="Información" value={informacion} onChange={e => setInformacion(e.target.value)} />
          <br /><br />
          <button id="botonenviar" onClick={postDatos}>Enviar</button>
          </div>
        </div>
      </div>

      <div className='grid-container'>
        {datosFiltro.length>0 ?datosFiltro.map ((item, index) => (
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
                <button id="botoneditar" onClick={() => eliminarProducto(item.id)}>Eliminar</button>
                <button id="botoneliminar" onClick={() => editarProducto(item.id)}>Editar</button>
              </Card.Body>
            </Card>
          </div>
        )) : datos.map ((item, index) => (
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


</div>

</>





  );
}

export default Products;
          
       

