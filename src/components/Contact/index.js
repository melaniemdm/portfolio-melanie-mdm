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
              <form id="contact-form" action="mailto:melanieborja.pro@gmail.com" method="post" >
                <input placeholder="Name" name="name" type="text" required />
                <input placeholder="Email" name="email" type="email" required />
                <textarea placeholder="Message" type="text" name="message" />
                <input className="button" id="submit" value="Submit" type="submit" />
              </form>
            </div>
          </section>
        );
      };

      export default Contact;