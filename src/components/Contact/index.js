import SocialLinks from "../SocialLinks";
import './style.scss';
  
    function Contact () {
        return (
          <section id="contact">
            <div className="container">
              <div className="heading-wrapper">
                <div className="heading">
                  <p className="title">
                   Me contacter
                  </p>
                  <p className="separator" />
                  {/* <p className="subtitle">
                    Envoyer un email à l'adresse  {''}
                    <span className="mail">
                    
                    <i className="fab fa-envelopes-bulk" />
                     
                    </span>
                   
                  </p> */}
                  <p className="subtitle"> Via le formulaire ci dessous :</p>
                </div>
                <SocialLinks />
              </div>
             
<div className="containerForm">
          
 
          <iframe
            src="https://tally.so/r/wLpvPy?transparentBackground=1"
            width="50%" height="650px"
            title="Nous contacter">
          </iframe>

        </div>




            </div>
          </section>
        );
      };

      export default Contact;