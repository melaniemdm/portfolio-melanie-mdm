import Navigation from "../../layout/Navigation"
import "../../layout/Header/style.scss"

function Header(){

    return <header className="header">
<div className="logo">
    <img src="LogoId/me.jpg" alt="id melanie" className="idMe"/>
</div>

        <h1>Bienvenu sur mon Portefoliot</h1>

<Navigation/>
        </header>
}
export default Header