import '../../components/Projets/style.scss';


function Projets(props) {

    return (
      
        <div className="containerListCardProjet">
     <div className="card">
       <div className="titleProjet"> {props.projet.title} </div>
       <div className="describe">  {props.projet.describe} </div>
       </div>
       <div className="ContainerImgProjet">
       <a href={props.projet.lien}>
       <img
            className="imgProjet"
                    src={props.projet.picture}
            alt="img du projet"
          ></img>
</a>
       </div>
     </div>
      
      
    );
  }
  export default Projets;