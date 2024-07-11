

import Carrucel from '../components/carrucel.jsx'
// import Cardproduc from '../components/cardproduc.jsx'
import  Navbarprin from '../components/navbarprin.jsx'
import  VideoCard from '../components/videos.jsx'
import MostrarProductos from '../components/mostrarProductos.jsx'
function ColorSc () {
  return (
       

    <div>
       <Navbarprin />
      
      <Carrucel/> 
     
      <MostrarProductos/>
      {/* <Cardproduc/>  */}
  
     {/* componente que tiene un video */}
     <VideoCard
          // videoUrl="https://v1.pinimg.com/videos/mc/720p/e1/10/12/e110120a115f16d4fc026ab97ae70570.mp4"
          
        
        />
      
     
    </div>

  


  )
}

export default ColorSc