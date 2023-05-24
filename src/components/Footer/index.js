/***********************
    Footer Component
   ***********************/
import './style.scss';
import SocialLinks from "../SocialLinks";

  
    function Footer () {
        return (
          <footer>
            <div className="wrapper">
              <h3>THANKS FOR VISITING</h3>
              <p>© {new Date().getFullYear()} Melanie Mariani.</p>
              <SocialLinks />
            </div>
          </footer>
        );
      };
      export default Footer;