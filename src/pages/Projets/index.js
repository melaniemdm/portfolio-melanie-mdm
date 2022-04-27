import Projets from '../../components/Projets';
import { listeDesProjets} from '../../datas/projetsListe.js';
import "../../components/Projets/style.scss";

function ProjetsPage(){

    return (
        <div>


<div className="containerListe">{listeDesProjets.map(projet=> <Projets key={projet.id} projet={projet}/>)}   </div>
        </div>
    )
}

    export default ProjetsPage