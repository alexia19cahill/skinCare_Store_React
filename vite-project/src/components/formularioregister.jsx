import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Formulario() {
  const [user, setUser] = useState("");
  const [contrasena, setContrasena] = useState("");

  const postdatos = () => {
    if (user !== "" && contrasena !== "") {
      const userDatos = {
        nombre: user,
        contrasena: contrasena,
      };

      axios.post("http://localhost:3001/user", userDatos)
        .then(response => {
          console.log("Usuario registrado", response);
        })
        .catch(error => {
          console.error("lo siento amiguito hubo un errorcito", error);
        });
    }
  };

  return (
    <div>
      <h1>REGISTRAR</h1>
      <input id='user' name="myInput"  placeholder='Ingrese nombre'value={user}onChange={e => setUser(e.target.value)}/>
      <input id='contrasena' name="myInput" placeholder='Ingrese contraseña' type="password" value={contrasena} onChange={e => setContrasena(e.target.value)}/>
      <button id='boton' onClick={postdatos}>Registro</button>
      <button id='boton'>
        <Link to='/login'>Ir al Login</Link>
      </button>
      <h1></h1>
    </div>
  );
}

export default Formulario;