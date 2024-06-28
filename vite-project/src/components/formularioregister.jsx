import { useState } from "react";
import { Link } from "react-router-dom";
import llamadoPost from '../services/llamados'

function Formulario() {
  const [user, setUser] = useState("");
  const [contrasena, setContrasena] = useState("");

  const postdatos = () => {
    if (user !== "" && contrasena !== "") {
      const userDatos = {
        nombre: user,
        contrasena: contrasena,
      };

     
      llamadoPost(userDatos)



    }
  };

  return (
    <div id="formulario">
      <h1>REGISTRAR</h1>
      <div>
      <input id='user' name="myInput"  placeholder='Ingrese nombre'value={user}onChange={e => setUser(e.target.value)}/>
      <input id='contrasena' name="myInput" placeholder='Ingrese contraseña' type="password" value={contrasena} onChange={e => setContrasena(e.target.value)}/>
      <button id='boton' onClick={postdatos}>Registro</button>
      <button id='boton'>
        <Link to='/login'>Ir al Login</Link>
      </button>
      </div>
      <h1></h1>
    </div>
  );
}

export default Formulario;