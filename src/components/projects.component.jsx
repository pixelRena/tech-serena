import { useState } from "react";
import projects from "../utils/projects.utils";
import {VscLinkExternal} from 'react-icons/vsc';

const Projects = () => {
    const { data } = projects;
    const [ currentSlide, setCurrentSlide ] = useState(0);
    
    return(
        <>
        <div className="project-title hidden-mobile"><span className="project-number">{currentSlide+1}//</span> {data[currentSlide].title}</div>
        <div className="swiper-container">
          <input type="radio" name="project" id="p-1" checked={currentSlide === 0} onChange={e => setCurrentSlide(0)}/>
          <input type="radio" name="project" id="p-2" checked={currentSlide === 1} onChange={e => setCurrentSlide(1)}/>
          <input type="radio" name="project" id="p-3" checked={currentSlide === 2} onChange={e => setCurrentSlide(2)}/>
          <input type="radio" name="project" id="p-4" checked={currentSlide === 3} onChange={e => setCurrentSlide(3)}/>
          <input type="radio" name="project" id="p-5" checked={currentSlide === 4} onChange={e => setCurrentSlide(4)}/>
          <div className="projects">
          { data.map(({type,client,tools,id,images}) => {
            return(
            <label className="swiper-item hidden-mobile" key={id} htmlFor={`p-${id}`} style={{"backgroundImage": `url(${images.coverpng})`}}>
              <div className="project-information">
                <div className="project-type"><span>Type:</span> {type}</div>
                { client && <div className="project-client"><span>Client:</span> {client}</div>}
                <div className="project-tools"><span>Tools:</span> {tools}</div>
              </div>
            </label>
            );
          })}
          { data.map(({id,title,images,websiteurl,githuburl}) => {
            return(
            <div className="hidden-desktop" key={id+"mobile"}>
              <div className="project-title"><span className="project-number">{id}//</span> {title}</div>
              <div className="swiper-item" htmlFor={`p-${id}`} style={{"backgroundImage": `url(${images.coverpng})`}}>
              </div>
              <div className="links">
                <div className="project-url"><a href={websiteurl} target="_blank" rel="noreferrer">Visit Project<VscLinkExternal className="external-icon" size={26}/></a></div>
                <div className="project-url">{githuburl ? <a href={githuburl} target="_blank" rel="noreferrer">View Code<VscLinkExternal className="external-icon" size={20}/></a> : <a href="#top">Code Unavailable<VscLinkExternal className="external-icon" size={20}/></a>}</div>
              </div>
            </div>
            );
          })}
          </div>
        </div>
        <div className="hidden-mobile project-url"><a href={data[currentSlide].websiteurl} target="_blank" rel="noreferrer">Visit Project<VscLinkExternal className="external-icon" size={26}/></a></div>
        <div className="hidden-mobile project-url">{data[currentSlide].githuburl && <a href={data[currentSlide].githuburl} target="_blank" rel="noreferrer">View Code<VscLinkExternal className="external-icon" size={20}/></a>}</div>
        </>
    );
}

export default Projects;