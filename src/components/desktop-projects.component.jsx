import { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { VscLinkExternal } from 'react-icons/vsc';
import { Modal } from 'react-responsive-modal';
import Loader from "./loader.component";
import '../styles/modal.styles.scss';
import 'react-responsive-modal/styles.css';

const DesktopProject = ({project}) => {
  const { id, title, images, type, client, tools, githuburl, websiteurl, description } = project;
  const [open, setOpen] = useState(false);
  const [loadImage, setLoadImage] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setOpen(false); 
    setLoadImage(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoadImage(true);
    }, 2000);
  },[open === true]);

  return(
      <div>
        <Modal 
        classNames={{
          overlay: 'project-overlay',
          modal: 'project-information',
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',
        }} 

        open={open} 
        onClose={onCloseModal}
        closeIcon={<div className="close-icon">Close</div>} 
        center>
          <h2>{title}</h2>
          <div className="project-image">
            {loadImage ? 
            <img src={images.thumbnail} alt={`${title}-thumbnail`}/>
            :
            <Loader/>}
          </div>
          <div className="project-description">{description}</div>
          <div className="project-stats">
            <div className="project-type"><span>Type:</span> {type}</div>
            {client && <div className="project-client"><span>Client:</span> {client}</div>}
            <div className="project-tools"><span>Tools:</span> {tools}</div>
            <div className="project-urls">
              <a href={websiteurl} target="_blank" rel="noreferrer">Visit Project<VscLinkExternal className="external-icon" size={15}/></a>
              {githuburl && <a href={githuburl} target="_blank" rel="noreferrer">View Code<VscLinkExternal className="external-icon" size={15}/></a>}
            </div>
          </div>
        </Modal>

        <div className="swiper-item" key={id} htmlFor={`p-${id}`} style={{"backgroundImage": `url(${images.cover})`}}>
          <div className="swiper-item-background">
            <div className="swiper-item-button" onClick={onOpenModal}><AiOutlinePlusCircle/></div>
          </div> 
        </div>
      </div>     
  )
};

export default DesktopProject;