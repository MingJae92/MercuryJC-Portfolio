import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AboutMe from './routes/AboutMe';
import Commissions from './routes/Commissions';
import MyWork from './routes/MyWork';
import Shop from './routes/Shop';
import "./routes/NavBar.css";
import Homepage from './routes/Homepage';
import ContactMe from './routes/ContactMe';

const NavBar = () => {
  return (
    <div>
      <h1>Welcome to MercuryJC!</h1>
     <BrowserRouter>
      <nav >
          <ul class="d-flex justify-content-end">
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/aboutme">About Me</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/commission">Commissions</Link>
            </li>
            <li>
              <Link to="/mywork">My Work</Link>
            </li>
            <li>
              <Link to="/contactme">Contact Me</Link>
            </li>
          </ul>
          <Routes>
            <Route>
              <Route path="/" element={<Homepage/>}></Route>
              <Route exact path="/mywork" element={<MyWork/>}></Route>
              <Route exact path="/shop" element={<Shop/>}></Route>
              <Route exact path="/commission" element={<Commissions/>}></Route>
              <Route exact path="/aboutme" element={<AboutMe/>}></Route>
              <Route exact path="/contactme" element={<ContactMe/>}></Route>
            </Route>
          </Routes>
        </nav>
     </BrowserRouter>
      
    </div>
  )
}

export default NavBar

