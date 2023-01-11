import {BsArrowUp} from 'react-icons/bs';
import Info from "./info.component";
import Projects from "./projects.component";

const SubContainer = ({showContainer, scrollUp}) => {
  return(
      <div className="subcontainer">
        {showContainer === "projects" ? 
        <Projects /> 
        :
        <Info/>
        }
        <button className="back-to-top-btn" onClick={() => scrollUp()}><BsArrowUp size={24}/></button>
      </div> 
  );
}

export default SubContainer;