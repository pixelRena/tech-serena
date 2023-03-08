import projects from "../utils/projects.utils";
import { useState, Fragment, useEffect, useRef } from "react";

const Home = () => {
  const [ showProjects, setShowProjects ] = useState(null);
  const [ hoveredItem, setHoveredItem ] = useState(null);
  const [ currentProject, setCurrentProject ] = useState("");
  const emailBtnRef = useRef(null);

  const handleMouseEnter = (project) => {
    setHoveredItem(null);
  }

  const handleMouseLeave = () => {
    setHoveredItem(null);
  }

  const handleResetPage = () => {
    setShowProjects(false);
    setCurrentProject("");
  }

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

  useEffect(() => {
    if(currentProject !== "") {
      setShowProjects(true)
    } else {
      setShowProjects(false)
    }
  },[currentProject])

  return(
  <div id="about-container">
    <div id="about">
        {
          showProjects === true ? 
          <div className="project-container">
            <div className="project-image" style={{
            backgroundImage:"url("+currentProject.images.cover+")"}}>
            </div>
            <div className="project-information">
              <h1 className="project-title">{currentProject.title}</h1>
              <p><span>Type:</span> {currentProject.type}</p>
              <p><span>Tools:</span> {currentProject.tools}</p>
              <p><span>Description:</span> {currentProject.description}</p>
              <div className="project-links">
                <a target="_blank" rel="noreferrer" href={currentProject.websiteurl}>Visit Project</a>
                {currentProject.githuburl && <a target="_blank" rel="noreferrer" href={currentProject.githuburl}>View Code</a>}
              </div>
            </div>
          </div>
          :
          <>
          <div className="name"><span>.</span>SERENA</div>
          <div className="bio">
            <div className="title"><span>Design</span>er <span>/</span> <span>Web</span> Developer</div>
            <div className="objective">
              I help businesses get more reach by creating designs and bringing them to life while you work on what's most important.
            </div>
          </div>
          </>
        }
    </div>

    {/* To be removed */}
    <div id="mobile-message">Mobile to come soon {':)'}</div>
    {/* To be removed */}

    <div className="projects-list"> 
        <h3 id="select-list-text">Projects:</h3>
        {
          projects["html"].map(project => {
            return(
              <Fragment key={project.title}>
                <div className="projects-list-title"
                onMouseEnter={() => handleMouseEnter(project)}
                onMouseLeave={() => handleMouseLeave()}
                onClick={() => setCurrentProject(project)}
                >{project.title}
                  <span className={`projects-list-bullet  ${project.title === currentProject.title ? "selected" : ""}`}></span>
                </div>
                {hoveredItem && hoveredItem.title === project.title && <div className="projects-list-thumbnail" style={{
                  backgroundImage:`url(${project.images.cover})`}}></div>}
              </Fragment>
            )})
        }
        {
            projects["react"].map(project => {
            return(
              <Fragment key={project.title}>
                <div className="projects-list-title"
                onMouseEnter={() => handleMouseEnter(project)}
                onMouseLeave={() => handleMouseLeave()}
                onClick={() => setCurrentProject(project)}
                >{project.title}
                  <span className={`projects-list-bullet  ${project.title === currentProject.title ? "selected" : ""}`}></span>
                </div>
                {hoveredItem && hoveredItem.title === project.title && <div className="projects-list-thumbnail" style={{
                  backgroundImage:`url(${project.images.cover})`}}></div>}
              </Fragment>
            )})
        }
    </div>
    {showProjects && <>
    <div id="short-about">
      <div>
        <span id="short-name">Serena D.</span><br/>
        <span id="short-role">Web Developer</span>
      </div>
      <div id="short-nav">
        <span className={`short-nav-item ${!showProjects && "active"}`} onClick={() => handleResetPage()}><span className="short-nav-item-number">01</span> Home</span><br/>
        <span className={`short-nav-item ${showProjects && "active"}`}onClick={() => setShowProjects(true)}><span className="short-nav-item-number">02</span> Projects</span>
      </div>
    </div>
    </>}
    <button 
    ref={emailBtnRef}
    id="email-btn" 
    onClick={() => handleEmailCopy()}>dserena01@yahoo.com</button>
  </div>
  );
};

export default Home;