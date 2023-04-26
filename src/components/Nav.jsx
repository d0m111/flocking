import { Link } from "react-router-dom"
import "../Styles/Home.css"


export default function Nav() {
    return(

            <nav className="nav_bar">
                <ul>
                    <li><Link to={"/aboutUs"}>About</Link></li>
                    <li><Link to={'/Portfolio'}>Portfolio</Link></li>
                    <li><Link to={'/Services'}>Services</Link></li>
                </ul>
            </nav>

    )
}