import axios from "axios";

async function llamadoPost(datosProductos) {
  try {
    const response = await axios.post("http://localhost:3001/productos", datosProductos);
    console.log("funciona", response);
  } catch (error) {
    console.error("lo siento amiguito hubo un errorcito", error);
  }
}

const apiUrl = "http://localhost:3001/user";

async function llamadoGet() {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("error", error);
    return null; 
  }
}

async function llamadoPull(productosData) {
  try {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:3001/user',
      data: productosData,
    });
    console.log("funciona el pull", response);
  } catch (error) {
    console.error(" error ", error);
  }
}

async function llamadoDelete(postIdToDelete) {
console.log(postIdToDelete);
  try {
    const response = await axios.delete(`http://localhost:3001/productos/${postIdToDelete}`);
    console.log("Producto eliminado", response);
  } catch (error) {
    console.error("errror", error);
  }
}


 export const llamadoPut = async (id,productData) => {
 console.log(id,productData);
   try {
     await axios.put(`http://localhost:3001/productos/${id}`,productData);
   } catch (error) {
     console.error("error", error);
   }
 };

export { llamadoPost, llamadoGet, llamadoPull ,llamadoDelete,};
