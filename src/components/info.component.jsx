import {VscLinkExternal} from 'react-icons/vsc';
import { useRef } from "react";

const Info = () => {
    const linkedinEl = useRef();
    const githubEl = useRef();
    const emailEl = useRef();

    const setEl = (num) => {
        switch(num) {
            case 1:
                linkedinEl.current.classList.add("active");
                break;
            case 2:
                githubEl.current.classList.add("active");
                break;
            case 3:
                emailEl.current.classList.add("active");
                break;
            default:
                linkedinEl.current.classList.remove("active");
                githubEl.current.classList.remove("active");
                emailEl.current.classList.remove("active");
                break;
        }
    }

    return(
        <div className="contact-container">
            <div className="contact-header">INFORMATION</div>
            <div className="contact-links">
              <div className="contact-item" onMouseOver={() => setEl(1)} onMouseLeave={() => setEl()}><a href="https://www.linkedin.com/in/sdean00/" target="_blank" rel="noreferrer">.LINKEDIN<VscLinkExternal className="external-icon" size={26}/></a><span className="reveal-info" ref={linkedinEl}>sdean00</span></div>
              <div className="contact-item" onMouseOver={() => setEl(2)} onMouseLeave={() => setEl()}><a href="https://github.com/pixelRena" target="_blank" rel="noreferrer">.GITHUB<VscLinkExternal className="external-icon" size={26}/></a><span className="reveal-info" ref={githubEl}>@pixelRena</span></div>
              <div className="contact-item" onMouseOver={() => setEl(3)} onMouseLeave={() => setEl()}><a href="mailto:dserena01@yahoo.com" target="_blank" rel="noreferrer">.EMAIL</a><span className="reveal-info" ref={emailEl}>dserena01@yahoo.com</span></div>
            </div>
            <div className="contact-footer">Handcrafted with love by <span><a href="https://github.com/pixelRena">Serena/pixelRena</a></span></div>
        </div>
    );
}

export default Info;