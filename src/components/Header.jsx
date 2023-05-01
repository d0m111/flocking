
import { Link } from "react-router-dom"
import FL_logo from "../Images/FL_logo.png"
import "../Styles/Home.css"
import "../Styles/App.css"

export default function Header() {
    return (
        <Link to={'/'} className="header_link">
            <header className="header_container">
                <div className="title_container">
                    <img src={FL_logo} alt="FlockLab logo" />
                    <h1>flock-lab</h1>
                </div>
                <p>Designing your digital presence</p>
            </header>
        </Link>

    )
}