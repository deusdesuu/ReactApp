import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Logo from "./logo.png"
import "./pages/styles/Nav.css"

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title"><img src={Logo} alt="Главная" /></Link>
            <ul>
                <CustomLink to="/bio">Биография</CustomLink>
                <CustomLink to="/domestic">Внутренняя политика</CustomLink>
                <CustomLink to="/foreign">Внешняя политика</CustomLink>
                <CustomLink to="/feedback">Обратная связь</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}