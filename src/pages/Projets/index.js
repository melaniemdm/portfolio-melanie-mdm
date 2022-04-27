import Projets from '../../components/Projets';
import { listeDesProjets} from '../../datas/projetsListe.js';


function ProjetsPage(){

    return (
        <div>
page des projets

<div id="containerListe">{listeDesProjets.map(projet=> <Projets key={projet.id} projet={projet}/>)}   </div>
        </div>
    )
}

    export default ProjetsPage