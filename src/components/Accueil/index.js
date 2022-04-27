import './style.scss';

function Accueil(){
    return (
        <div className="containerPresentMe">
<div className="uk-card uk-card-default uk-card-hover uk-card-body hoverCard">
            <h3 className="uk-card-title">Présentation</h3>
            <p>Suite à une reconvertion professionelle j'ai decidé de devenir developpeur front-end React-JavaScript - Métier Passion</p>
        </div>
        <div className="uk-card uk-card-default uk-card-hover uk-card-body hoverCard">
            <h3 className="uk-card-title">Mes compétences & qualités</h3>
            <p>Découvrez moi!</p>
        </div>
        <div className="uk-card uk-card-default uk-card-hover uk-card-body hoverCard">
            <h3 className="uk-card-title">Mes projets</h3>
            <p>Dévouvrez mon portfolio!</p>
        </div>
        </div>
    )
}
export default Accueil