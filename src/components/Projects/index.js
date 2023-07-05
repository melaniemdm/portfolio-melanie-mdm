import Project from "../Project";
import './style.scss'
import { listeDesProjets} from '../../datas/projetsListe.js'; 

    function Projects (props) {
      const sortedProjects = [...listeDesProjets].sort((a, b) =>  new Date(b.date_realisation) - new Date(a.date_realisation));
      console.log(sortedProjects)
      const sampleDate = listeDesProjets[0].date_realisation;
      console.log(sampleDate);
        return (
          <section id="projects">
            <div className="projects-container">
              <div className="heading">
                <h3 className="title">Mes projets</h3>
                <p className="separator" />
                <p className="subtitle">
                Voici une liste des principaux projets sur lesquels j'ai travaillé, à la fois pendant ma formation chez OpenClassrooms et dans le cadre de mes projets personnels {' '}
                                  </p>
              </div>
              <div className="projects-wrapper">
              </div>
              
                <div className="containerListe">{sortedProjects.map(projet=> <Project 
                key={projet.id} projet={projet}
                  title={projet.title}
                  img={projet.picture}
                  tech="js css react node"
                  link={projet.lien}
                  repo={projet.repo}
                  techno={projet.techno}
                >
                  <small>
                    {projet.describe}
                    </small><br></br>
                    <small><div className="techno">
                  Techno(s) utlisée(s) : {projet.techno} </div>    
                    </small>
                  
                  <p>
                 </p>
                
                </Project>)} 
               
              </div>
            </div>
          </section>
        );
      };
      export default Projects;