import { useState } from "react";
import { Link } from "react-router-dom";
import {llamadoPost} from '../services/llamados'

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
      <h1 id="movertext">REGISTRAR</h1>
      <div>
      <br />
      <input id='user' name="myInput"  placeholder='Ingrese nombre'value={user}onChange={e => setUser(e.target.value)}/>
      <br /><br />
      
      <input id='contrasena' name="myInput" placeholder='Ingrese contraseña' type="password" value={contrasena} onChange={e => setContrasena(e.target.value)}/>
      <br /> <br />
      <button id='boton' onClick={postdatos}>Registrar</button> 
      <br /> <br />
      <h3 id="text">You have an account?</h3>
      <Link id="link" to='/login'>Ir al Login</Link>
      </div>
  
    </div>
  );
}

export default Formulario;