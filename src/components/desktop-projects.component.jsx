const DesktopProject = ({project}) => {
    const { id, images, type, client, tools } = project;
    return(
        <label className="swiper-item hidden-mobile" key={id} htmlFor={`p-${id}`} style={{"backgroundImage": `url(${images.coverpng})`}}>
        <div className="project-information">
          <div className="project-type"><span>Type:</span> {type}</div>
          { client && <div className="project-client"><span>Client:</span> {client}</div>}
          <div className="project-tools"><span>Tools:</span> {tools}</div>
        </div>
      </label>      
    )
};

export default DesktopProject;