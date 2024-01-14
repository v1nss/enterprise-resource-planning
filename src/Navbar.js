import { Link, resolvePath, useMatch, useResolvedPath} from "react-router-dom"

export default function Navbar() {
    return(
        <nav className="nav">
            <Link to="/" className="dashboard"> 
                dashboard
            </Link>
            <ul>
                <CustomLink to="/human-resources">Human Resources</CustomLink>
                <CustomLink to="/project-manegament">Project Management</CustomLink>
                <CustomLink to="/supply-chain">Supply Chain</CustomLink>
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