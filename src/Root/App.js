import { Outlet} from 'react-router-dom';
// import xs from 'xstream';
// import { useState, useEffect } from 'react';
import '../Styles/App.css';
// import Home from '../components/Home/Home.jsx';
import Home from "../components/Home"
// import About from '../components/About';
// import Portfolio from '../components/Portfolio';
// import Services from '../components/Services';

// import elMuchacho from "../animation-background/animationFlocking"
// import Boid from '../components/boids';


function App() {

  return (
    <div className="App">
      {/* <Boid/> */}
      <Home/>
      <Outlet/>
      {/* <Main/> */}
    </div>
  );
}

export default App;
