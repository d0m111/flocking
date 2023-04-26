import Header from "./Header";
import Nav from "./Nav";
import '../Styles/App.css'


export default function Home() {
    return (
        <div className="home_container">
            <Header/>
            <Nav/>
        </div>
    )
}