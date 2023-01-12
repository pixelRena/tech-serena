import projects from "../utils/projects.utils";
import {VscLinkExternal} from 'react-icons/vsc';
import {BsArrowLeftCircle,BsArrowRightCircle} from 'react-icons/bs';

const Projects = () => {
    const { data } = projects;
    const [ currentSlide, setCurrentSlide ] = useState(0);
    
    return(
        <>
        <div className="project-title"><span className="project-number">{currentSlide+1}//</span> {data[currentSlide].title}</div>
        <div className="swiper-container">
          <input type="radio" name="project" id="p-1" checked={currentSlide === 0} onChange={e => setCurrentSlide(0)}/>
          <input type="radio" name="project" id="p-2" checked={currentSlide === 1} onChange={e => setCurrentSlide(1)}/>
          <input type="radio" name="project" id="p-3" checked={currentSlide === 2} onChange={e => setCurrentSlide(2)}/>
          <input type="radio" name="project" id="p-4" checked={currentSlide === 3} onChange={e => setCurrentSlide(3)}/>
          <div className="projects">
          <div className="arrow-left" onClick={() => setCurrentSlide(currentSlide === 0 ? 3:currentSlide-1)}><BsArrowLeftCircle size={32}/></div>
          { data.map(({type,client,tools,id,images}) => {
            return(
            <label className="swiper-item" key={id} htmlFor={`p-${id}`} style={{"backgroundImage": `url(${images.coverpng})`}}>
              <div className="project-information">
                <div className="project-type"><span>Type:</span> {type}</div>
                { client && <div className="project-client"><span>Client:</span> {client}</div>}
                <div className="project-tools"><span>Tools:</span> {tools}</div>
              </div>
            </label>
            );
          })}
          <div className="arrow-right" onClick={() => setCurrentSlide(currentSlide === 3 ? 0:currentSlide+1)}><BsArrowRightCircle size={32}/></div>
          </div>
        </div>
        <div className="project-url"><a href={data[currentSlide].websiteurl} target="_blank" rel="noreferrer">Visit Project<VscLinkExternal className="external-icon" size={26}/></a></div>
        <div className="project-url"><a href={data[currentSlide].githuburl} target="_blank" rel="noreferrer">View Code<VscLinkExternal className="external-icon" size={20}/></a></div>
        </>
    );
}

export default Projects;