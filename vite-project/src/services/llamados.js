import axios from "axios";

function llamadoPost(userDatos) {


    axios.post("http://localhost:3001/user", userDatos)
    .then(response => {
         alert("Usuario registrado ");
      console.log("Usuario registrado", response);
    })
    .catch(error => {
      console.error("lo siento amiguito hubo un errorcito", error);
    });



}


function llamadoGet(getdatos) {


  axios.get("http://localhost:3001/user",getdatos )
  .then(response => {
       alert("Usuario registrado ");
    console.log("Usuario registrado", response);
  })
  .catch(error => {
    console.error("lo siento amiguito hubo un errorcito", error);
  });



}

export default llamadoPost;llamadoGet;