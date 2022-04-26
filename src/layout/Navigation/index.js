import "../../layout/Navigation/style.scss"

function Navigation(){

    return (
        <div> 
 <nav >
 <label htmlFor="toggle">☰</label>
    <input type="checkbox" id="toggle"/>
  <div className="navigate">
    <a href="/accueil " className="Accueil">Accueil</a> 
    <a href="/presentMe" className="quisuisje">Qui suis-je?</a>
    <a href="/projets" className="projets">Mes Projets</a>
    <a href="https://www.linkedin.com/in/m%C3%A9lanie-mariani-3275248a/" className="mail">Prendre Contact</a></div>
  </nav>
      
       
         </div>   


 
    )
}
export default Navigation