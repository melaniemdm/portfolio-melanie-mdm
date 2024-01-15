import "./style.scss";
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
        <div className="container1">
        <h1>
          <span className="line">Découvrez</span>
          <span className="color">mon</span> Univers
          <span className="line"> </span>
          <span className="color">de</span> Développement.
        </h1>
        </div>
        <div className="buttons">
          <a href="#projects">my portfolio</a>
          <a href="#contact" className="cta">
            get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
export default TitlePrincipal;
