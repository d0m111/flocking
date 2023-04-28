import { Link } from "react-router-dom"
import "../Styles/Home.css"


export default function Nav() {
    return(

            <nav className="nav_bar">
                <ul>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={'/portfolio'}>Portfolio</Link></li>
                    {/* <li><Link to={'/services'}>Services</Link></li> */}
                </ul>
            </nav>

    )
}