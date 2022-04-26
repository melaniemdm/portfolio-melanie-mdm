import "../../layout/Navigation/style.scss"

function Navigation(){

    return (
        <div >
 <nav className="navigate">
    <a href="/home " className="home">Accueil</a> 
    <a href="/presentation" className="quisuisje">Qui suis-je?</a>
    <a href="/projets" className="projets">Mes Projets</a>
    <a href="https://www.linkedin.com/in/m%C3%A9lanie-mariani-3275248a/" className="mail">Prendre Contact</a>
    </nav>
            
        </div>
    )
}
export default Navigation