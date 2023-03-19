import projects from "../utils/projects.utils";
import { Fragment, useRef } from "react";

const Home = () => {
  const emailBtnRef = useRef(null);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText('dserena01@yahoo.com')
      .then(() => {
        emailBtnRef.current.innerText = "Copied Successfully!";
        setTimeout(() => {
          emailBtnRef.current.innerText = "dserena01@yahoo.com";
        }, 2000)
      })
      .catch((err) => {
        emailBtnRef.current.innerText = "Failed to copy email :(";
        setTimeout(() => {
          emailBtnRef.current.innerText = "dserena01@yahoo.com";
        }, 2000)
      });
  }

  return(
  <div id="about-container">
    <div id="about">
      <div className="name"><span>.</span>SERENA</div>
      <div className="bio">
        <div className="title"><span>Design</span>er <span>/</span> <span>Web</span> Developer</div>
        <div className="objective">
          I help businesses get more reach by creating designs and bringing them to life while you work on what's most important.
        </div>
      </div>
    </div>

    <div className="projects-list"> 
        <h3 id="select-list-text">Projects:</h3>
        {
          projects["html"].map(project => {
            return(
              <Fragment key={project.title}>
                <a href={project.websiteurl} 
                target="_blank"
                rel="noreferrer"
                className="projects-list-title"
                
                ><span className="projects-list-type">{project.type} {"//"} </span>{project.title}
                  <span className="projects-list-bullet"></span>
                </a>
              </Fragment>
            )})
        }
        {
            projects["react"].map(project => {
            return(
              <Fragment key={project.title}>
                <a href={project.websiteurl} 
                target="_blank"
                rel="noreferrer"
                className="projects-list-title"
                
                ><span className="projects-list-type">{project.type} {"//"} </span> {project.title}
                  <span className="projects-list-bullet"></span>
                </a>
              </Fragment>
            )})
        }
    </div>
    <button 
    ref={emailBtnRef}
    id="email-btn" 
    onClick={() => handleEmailCopy()}>dserena01@yahoo.com</button>
  </div>
  );
};

export default Home;