import { VscLinkExternal } from 'react-icons/vsc';

const MobileProject = ({ project }) => {
    const { id, title, images, websiteurl, githuburl } = project;
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
};

export default MobileProject;