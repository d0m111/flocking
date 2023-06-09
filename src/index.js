import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './Root/App';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
// import Services from './components/Services';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children : [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/portfolio",
        element: <Portfolio/>
      },
      // {
      //   path: "/services",
      //   element: <Services/>
      // }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
