import { Link, resolvePath, useMatch, useResolvedPath} from "react-router-dom"

export default function Navbar() {
    return(
        <nav className="nav">
            <ul>
                <a><CustomLink to="/" className="dashboard"> 
                dashboard
            </CustomLink></a>
                <a><CustomLink to="/human-resources">Human Resources</CustomLink></a>
                <a><CustomLink to="/project-manegament">Project Management</CustomLink></a>
                <a><CustomLink to="/supply-chain">Supply Chain</CustomLink></a>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}