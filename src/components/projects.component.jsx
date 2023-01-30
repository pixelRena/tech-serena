import { useState } from "react";
import { VscLinkExternal } from 'react-icons/vsc';
import DesktopProject from "./desktop-projects.component";
import MobileProject from "./mobile-projects.component";
import projects from "../utils/projects.utils";

const Projects = () => {
    const { data } = projects;
    const [ currentSlide, setCurrentSlide ] = useState(0);
    
    return(
        <>
        <div className="swiper-container">
          <input type="radio" name="project" id="p-1" checked={currentSlide === 0} onChange={e => setCurrentSlide(0)}/>
          <input type="radio" name="project" id="p-2" checked={currentSlide === 1} onChange={e => setCurrentSlide(1)}/>
          <input type="radio" name="project" id="p-3" checked={currentSlide === 2} onChange={e => setCurrentSlide(2)}/>
          <input type="radio" name="project" id="p-4" checked={currentSlide === 3} onChange={e => setCurrentSlide(3)}/>
          <input type="radio" name="project" id="p-5" checked={currentSlide === 4} onChange={e => setCurrentSlide(4)}/>

          <div className="projects">
          { data.map(project => 
              <DesktopProject key={project.title} project={project}/>
          )}
          { data.map(project => 
              <MobileProject key={project.title} project={project}/>
          )}
          </div>
        </div>
        <div className="hidden-mobile project-url"><a href={data[currentSlide].websiteurl} rel="noreferrer">More information</a></div>
        <div className="hidden-mobile project-url">{data[currentSlide].githuburl && <a href={data[currentSlide].githuburl} target="_blank" rel="noreferrer">View Code<VscLinkExternal className="external-icon" size={20}/></a>}</div>
        </>
    );
}

export default Projects;