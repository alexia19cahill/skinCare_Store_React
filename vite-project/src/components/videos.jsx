// este componente es para agregar un video en la pagina web
// importacion de la hoja de estilos
import "../styles/video.css"
// esta constante permite  que tanto el titulo como la URL puedan ser cambiados en a pagina que se quiere utilizar
const VideoCard = ({ videoUrl }) => {
  return (
    <div className="video">
      <div className="card-body">
        < video className="videotam" autoPlay muted loop playsInline>
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
    </div>
   
  );
}
export default VideoCard;