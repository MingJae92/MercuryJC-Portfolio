import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { BrowserRouter , Link,  } from 'react-router-dom';
import "./routes/NavBar.css";
import {slide as Menu} from "react-burger-menu";

const NavBar = () => {
  return (
    
    <div>
      <h1>Welcome to MercuryJC!</h1>

      <Menu>
        <BrowserRouter>
          <nav>
            <ul>
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
          </nav>
        </BrowserRouter>
      </Menu>  
    </div>
  )
}

export default NavBar

