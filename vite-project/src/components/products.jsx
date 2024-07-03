import { useState, useEffect } from "react";
import axios from "axios";
import { llamadoPost, llamadoDelete } from "../services/llamados";

function Products() {
  const [producto, setProducto] = useState("");
  const [precio, setPrecio] = useState("");
  const [informacion, setinformacion] = useState("");
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
      };
      console.log(productosDatos);
      await llamadoPost(productosDatos);
      actualizarProductos();
    }
  };

  const eliminarProducto = async (id) => {


   llamadoDelete(id)
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
    <div id="formulario">
    <>

      <input type="file" />
      <input id="producto" name="myInput" placeholder="Nombre de producto" value={producto} onChange={e => setProducto(e.target.value)} />
      <br /><br />
      <input id="precio" name="myInput" placeholder="Precio" value={precio} onChange={e => setPrecio(e.target.value)} />
      <br /><br />
      <input id="informacion" name="myInput" placeholder="información" value={informacion} onChange={e => setinformacion(e.target.value)} />
      <button id="boton" onClick={postDatos}>Enter</button>
      {datos.map((item, index) => (
        <div key={index}>
          <p>Producto: {item.producto}</p>
          <p>Precio: {item.precio}</p>
          <button onClick={() => eliminarProducto(item.id)}>Eliminar</button>
        </div>
      ))}
    </>
    </div>
  );
}

export default Products;
