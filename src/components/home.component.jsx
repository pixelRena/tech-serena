import { RxDoubleArrowDown } from 'react-icons/rx';

const Home = ({showProjects}) => {
    return(
    <>
    <div className="about">
        <div className="name"><span>.</span>SERENA</div>
        <div className="bio">
          <div className="title"><span>Design</span>er <span>/</span> <span>Web</span> Developer</div>
          <div className="objective">
            I help small businesses get more reach by creating designs and bringing them to life.
            <span>Scroll to view my {showProjects === false ? "contact information" : "works"}.</span>
          </div>
        </div>
        <div className="about-hr"></div>
    </div> 
    <div className="arrow-down-btn-container">
        <div className="btn-text-shown">{showProjects === false ? "Contact Information" : "My Work"}</div>
        <button className="see-more-btn"><RxDoubleArrowDown size={40}/></button>
    </div>
    </>
    );
};

export default Home;