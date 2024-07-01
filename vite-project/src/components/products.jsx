
import { useState } from "react";
import llamadoGet from '../services/llamados'
function Products() {

  const [producto, setproducto] = useState("");
const [precio, setprecio] = useState("");

const getdatos = () => {
  if (producto !== "" && precio !== "") {
    const productosDatos = {
      producto: producto,
      precio: precio,
    };

   
    llamadoGet(productosDatos)



  }
};


  return (
    <div>
   <input type="file" />
<input id='producto' name="myInput" placeholder='Nombre de producto' type="" value={producto} onChange={e => setproducto(e.target.value)}/>
<input id='precio' name="myInput" placeholder='precio' type="" value={precio} onChange={e => setprecio(e.target.value)}/>
<button id='boton' onClick={getdatos}>enter</button>
    </div>
  )
  
}

export default Products

