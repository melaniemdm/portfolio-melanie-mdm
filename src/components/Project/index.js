 /***********************
    Project Component
   ***********************/
  import './style.scss';
    function Project (props) {
        const tech = {
          sass: 'fab fa-sass',
          css: 'fab fa-css3-alt',
          js: 'fab fa-js-square',
          react: 'fab fa-react',
        
        };
      
        const link = props.link || 'http://';
        const repo = props.repo || 'http://';
      
        return (
          <div className="project">
            <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
              <img className="project-image" src={props.img} alt={'Screenshot of ' + props.title} />
            </a>
            <div className="project-details">
              <div className="project-tile">
                <p className="icons">
                  {props.tech.split(' ').map(t => (
                    <i className={tech[t]} key={t} />
                  ))}
                </p>
                {props.title}{' '}
              </div>
              {props.children}
              <div className="buttons">
                <a href={repo} target="_blank" rel="noopener noreferrer">
                  Source <i className="fas fa-external-link-alt" />
                </a>
                <a href={link} target="_blank" rel="noopener noreferrer">
                 Site en ligne <i className="fas fa-external-link-alt" />
                </a>
              </div>
            </div>
          </div>
        );
      };

      export default Project;