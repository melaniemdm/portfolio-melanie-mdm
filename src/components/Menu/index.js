import './style.scss';
import SocialLinks from "../SocialLinks";

  function Menu (props) {
    return (
      <div className={`menu-container ${props.showMenu}`}>
        <div className="overlay" />
        <div className="menu-items">
          <ul>
            <li>
              <a href="#welcome-section" onClick={props.toggleMenu}>
              Mon Univers
              </a>
            </li>
            <li>
              <a href="#about" onClick={props.toggleMenu}>
              Mon Parcours et Projets 
              </a>
            </li>
            <li>
              <a href="#projects" onClick={props.toggleMenu}>
              Projets Phares
              </a>
            </li>
            <li>
              <a href="#contact" onClick={props.toggleMenu}>
                Me contacter
              </a>
            </li>
          </ul>
          <SocialLinks />
        </div>
      </div>
    );
  };
  export default Menu;