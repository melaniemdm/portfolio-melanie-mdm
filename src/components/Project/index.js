
  import './style.scss';
    function Project (props) {
        const tech = {
          sass: 'fab fa-sass',
          css: 'fab fa-css3-alt',
          js: 'fab fa-js-square',
          react: 'fab fa-react',
          angular:'fab fa-angular',
        
        
        };
      
        const link = props.link 
        const repo = props.repo 
      
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
  {repo !== "" && (
    <a href={repo} target="_blank" rel="noopener noreferrer">
      Source <i className="fas fa-external-link-alt" />
    </a>
  )}
  {link !== "" && (
    <a href={link} target="_blank" rel="noopener noreferrer">
      Site en ligne <i className="fas fa-external-link-alt" />
    </a>
  )}
</div>
            </div>
          </div>
        );
      };

      export default Project;