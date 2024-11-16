import { useEffect } from "react"
import { Link } from "react-router-dom"
import "./styles.css"
import { useDarkMode } from "../../app/contexts/dark-mode-context"

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode")
    } else {
      document.body.classList.remove("dark-mode")
    }
  }, [isDarkMode])

  return (
    <header
      style={{
        display: "flex",
        width: "100vw",
        padding: "20px 150px",
      }}
    >
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </header>
  )
}

export default Header
