
import { Link } from "react-router-dom"
import "../Styles/App.css"

export default function Header() {
    return (
        <Link to={'/'} className="header_link">
            <header className="header_container">
                <h1>flock-lab</h1>
                <p>Designing your digital presence</p>
            </header>
        </Link>

    )
}