import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css"
import Swal from "sweetalert2";

function Formulariologin() {
  const [user, setUser] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [datos, setDatos] = useState([]);
  const [,setUserFound] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/user")
      .then(response => {
        setDatos(response.data); 
        console.log("Usuarios registrados", response.data);
      })
      .catch(error => {
        console.error("Hubo un error al obtener los datos", error);
      });
  }, []);

  const getdatos = (e) => {
    e.preventDefault();
    if (user.trim() === "" || contrasena.trim() === "") {
      Swal.fire("no puede tener espacios vacios");
      return;
    }

    if (user !== "" && contrasena !== "") {
      let found = false;  
      datos.forEach(dato => {
        if (dato.nombre === user && dato.contrasena === contrasena) {
          found = true;
        }
      });

      setUserFound(found);

      if (found) {
         Swal.fire("datos correctos");
        navigate('/home'); 
      } else {
        Swal.fire("Usuario o contraseña incorrectos");
      }
    }
  };

  return (
    <div id="formulario">
      <h1 id="movertext">LOGIN</h1>
      <br />
      <input id='user'name="myInput"placeholder='Ingrese nombre'value={user} onChange={e => setUser(e.target.value)}/>
      <br /><br />
      <input id='contrasena'name="myInput"placeholder='Ingrese contraseña'type="password"value={contrasena}onChange={e => setContrasena(e.target.value)}/>
      <br /><br />
      <button id='boton' onClick={getdatos}>Login</button>
      <br /> <br />
      <h3 id="text">Dont have an account?</h3>
        <Link id="link" to='/register'>Ir a Register</Link>

     
      <h1></h1>
    </div>
    
  );
}

export default Formulariologin;