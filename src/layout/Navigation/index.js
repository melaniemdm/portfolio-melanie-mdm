import "../../layout/Navigation/style.scss"
import {Link} from 'react-router-dom';
function Navigation(){

    return (
        <div> 
 <nav >
 <label htmlFor="toggle">☰</label>
    <input type="checkbox" id="toggle"/>
  <div className="navigate">
    <Link to="/accueil " className="Accueil">Accueil</Link> 
    <Link to="/presentMe" className="quisuisje">Qui suis-je?</Link>
    <Link to="/projets" className="projets">Mes Projets</Link>
    <a href="https://www.linkedin.com/in/m%C3%A9lanie-mariani-3275248a/" className="mail">Prendre Contact</a></div>
  </nav>
      
       
         </div>   


 
    )
}
export default Navigation