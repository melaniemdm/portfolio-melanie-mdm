import "./style.scss";
function Project(props) {
  const tech = {
    sass: "fab fa-sass",
    css: "fab fa-css3-alt",
    javascript: "fab fa-js-square",
    react: "fab fa-react",
    angular: "fab fa-angular",
    html: "fab fa-html5",
    wordpress: "fab fa-wordpress",
    unsplash: "fab fa-unsplash",
    figma: "fab fa-figma",
    typescript: "devicon devicon-typescript-plain colored",
    maven: "devicon devicon-maven-plain colored",
    spring: "devicon devicon-spring-plain colored",
    jest: "devicon devicon-jest-plain colored",
   
  };

  const link = props.link;
  const repo = props.repo;

  return (
    <div className="project">
      <a className="project-link" target="_blank" rel="noopener noreferrer">
        <img
          className="project-image"
          src={props.img}
          alt={"Screenshot of " + props.title}
        />
      </a>
      <div className="project-details">
        <div className="project-tile">
          <p className="icons">
            {props.tech
              .split(" ")
              .map((t) => (tech[t] ? <i className={tech[t]} key={t} /> : null))}
          </p>
          {props.title}{" "}
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
}

export default Project;
