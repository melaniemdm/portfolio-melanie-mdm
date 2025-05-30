
   function SocialLinks(){
        return (
          <div className="social">
                       <a
              id="profile-link"
              href="https://github.com/melaniemdm/mdm_development"
              target="_blank"
              rel="noopener noreferrer"
              title="author's GitHub Profile"
            >
              {' '}
              <i className="fab fa-github" />
            </a>
            <a
              id="profile-link"
              href="https://www.linkedin.com/in/melanie-mariani/"
              target="_blank"
              rel="noopener noreferrer"
              title="author's Linkedin profile"
            >
              {' '}
              <i className="fab fa-linkedin" />
            </a>
           
          </div>
        );
      };

      export default SocialLinks;