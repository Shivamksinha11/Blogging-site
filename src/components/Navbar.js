import React from 'react';
import '../styles/Navbar.css';
import logo from '../Images/blog.png';
import { Link } from 'react-scroll';
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <a href="/" title="Image from freeiconspng.com">
                        <img className="logo ps-3" src={logo} width="350" alt="Blogger Logo Icon Svg" />
                    </a>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 me-5 mb-lg-0">

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categories
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="/lifestyles">Lifestyle</a></li>
                            <li><a class="dropdown-item" href="/foods">Food</a></li>
                            <li><a class="dropdown-item" href="/travels">Travel</a></li>
                            <li><a class="dropdown-item" href="/photographs">Photography</a></li>
                        </ul>
                    </li>
                        
                        {/* <li className="nav-item">
                            <Link to="sidebar"><a className="nav-link" aria-current="page" href="#">Categories</a></Link>
                        </li> */}
                        <li className="nav-item">
                            <Link to="footer"><a className="nav-link" href="#">Contact</a></Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    );
}

export default Navbar
