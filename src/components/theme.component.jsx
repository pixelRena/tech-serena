import {TbSun} from 'react-icons/tb';

const Theme = () => {
    return(
    <div className="theme-container">
        <button className="theme-toggler lightmode"><TbSun className="theme-icon" size={32}/>DARK MODE</button>
    </div>
    );
}

export default Theme;