import '../../components/Projets/style.scss';
import canard from '../../assets/fisheye.png';

function Projets() {

    return (
        <div className="containerListCardProjet">
     <div className="card">
       <div className="titleProjet"> Réservia </div>
       <div className="describe"> blavbpodujjpfuzsrfg </div>
       </div>
       <div className="ContainerImgProjet">
       <a href="https://melaniemdm.github.io/fisheye/">
       <img
            className="imgProjet"
                    src={canard}
            alt="img du projet"
          ></img>
</a>
       </div>
     </div>
      
      
    );
  }
  export default Projets;