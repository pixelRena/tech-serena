import { useContext } from "react";
import ThemeContext from "../utils/ThemeContext.utils";
import {TbSun} from 'react-icons/tb';

const Theme = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return(
    <div className="theme-container">
        <button className="theme-toggler" onClick={e => setTheme(theme === "light" ? "dark" : "light")}><TbSun className="theme-icon" size={32}/>{theme === "light" ? "DARK" : "LIGHT"} MODE</button>
    </div>
    );
}

export default Theme;