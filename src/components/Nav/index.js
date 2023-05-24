import './style.scss'
  
    function Nav (props) {
        return (
       
            <nav id="navbar">
              <div className="nav-wrapper">
                <div className="brand">
                  Mélanie 
                <div><strong> Mariani</strong></div>  
                </div>
                <a
                  onClick={props.toggleMenu}
                  className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}
                >
                  <span />
                </a>
              </div>
            </nav>
       
        );
      };
      export default Nav;