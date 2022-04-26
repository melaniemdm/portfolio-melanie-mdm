import '../../layout/Footer/style.scss';


function Footer(){

    return (
        <div className="containerFooter">
  <h2 className="nameFooter">Melanie MDM</h2>
  <div className="containerIconeContact">
  <a href="https://github.com/melaniemdm?tab=repositories" >    
  <img src="LogoId/git.gif" alt="gitHub" className="gitHub"/>
  </a>
  <a href="https://www.linkedin.com/in/m%C3%A9lanie-mariani-3275248a/"> 
  <img src="LogoId/linkedin.png" alt="lien Linkedin" className="linkedin"/> 
  </a>
  
  </div>
</div>
    )
}

export default Footer