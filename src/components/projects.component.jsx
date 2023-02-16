import DesktopProject from "./desktop-projects.component";
import projects from "../utils/projects.utils";

const Projects = ({showTypeOfProjects}) => {
    return(
        <div className="swiper-container">
          <div className="projects">
          { showTypeOfProjects === "all" ?
            <>
            {projects["react"].map(project => 
              <DesktopProject key={project.title} project={project}/>
            )}
            {projects["html"].map(project => 
              <DesktopProject key={project.title} project={project}/>
            )}
            </>
            :
            projects[showTypeOfProjects].map(project => 
              <DesktopProject key={project.title} project={project}/>
          )}
          </div>
        </div>
    );
}

export default Projects;