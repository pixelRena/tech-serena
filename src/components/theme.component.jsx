import { useContext } from "react"
import ThemeContext from "../utils/ThemeContext.utils"
import { TbSun } from "react-icons/tb"
import { TiSocialLinkedinCircular } from "react-icons/ti"
import { DiGithub } from "react-icons/di"
import { FaDev } from "react-icons/fa"

const Theme = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div className="theme-container">
      <button
        className="theme-toggler"
        onClick={(e) => setTheme(theme === "light" ? "dark" : "light")}
      >
        <TbSun className="theme-icon" size={32} />
        {theme === "light" ? "DARK" : "LIGHT"} MODE
      </button>
      <div className="social-icons">
        <a
          href="https://www.github.com/pixelRena"
          target="_blank"
          title="GitHub"
          rel="noreferrer"
        >
          <DiGithub size={45} />
        </a>
        <a
          href="https://www.linkedin.com/in/sdean00"
          target="_blank"
          title="LinkedIn"
          rel="noreferrer"
        >
          <TiSocialLinkedinCircular size={45} />
        </a>
        <a
          href="https://www.dev.to/pixelRena"
          target="_blank"
          title="Dev.to"
          rel="noreferrer"
        >
          <FaDev size={45} />
        </a>
      </div>
    </div>
  )
}

export default Theme
