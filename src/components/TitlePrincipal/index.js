 import './style.scss';
 /***********************
    Header Component
   ***********************/
  
    function TitlePrincipal(props) {
        return (
          <header id="welcome-section">
            <div className="forest" />
            <div className="silhouette" />
            <div className="moon" />
            <div className="container">
              <h1>
                <span className="line">Welcome</span>
                <span className="line">my</span>
                <span className="line">
                  <span className="color">&</span> portfolio.
                </span>
              </h1>
              <div className="buttons">
                <a href="#projects">my portfolio</a>
                <a href="#contact" className="cta">
                  get in touch
                </a>
              </div>
            </div>
          </header>
        );
      };
      export default TitlePrincipal;
      