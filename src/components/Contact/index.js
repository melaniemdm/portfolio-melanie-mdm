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
                  <p className="subtitle">
                    Envoyer un email à l'adresse  {''}
                    <span className="mail">
                     melanieborja.pro
                      <i className="fas fa-at at" />
                      gmail.com
                    </span>
                   
                  </p>
                  <p className="subtitle"> ou remplir le formulaire ci dessous :</p>
                </div>
                <SocialLinks />
              </div>
              <form id="contact-form" action="#">
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