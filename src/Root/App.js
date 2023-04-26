import { Outlet } from 'react-router-dom';
import '../Styles/App.css';
// import Home from '../components/Home/Home.jsx';
import Home from "../components/Home"
// import About from '../components/About';
// import Portfolio from '../components/Portfolio';
// import Services from '../components/Services';

function App() {
  return (
    <div className="App">
      <Home/>
      <Outlet/>

    <div>
      

      {/* <script src={main}></script> */}
    </div>
    </div>
  );
}

export default App;
