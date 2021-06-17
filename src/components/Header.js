import React from 'react';
import Typist from 'react-typist';
import '../styles/Header.css';
import logo from '../Images/logo.png';

function Header() {
    return (
        <div className="container-fluid">
            <div className="head">
                <Typist>
                    <Typist.Delay ms={500} />
                        <span className="subheader">Welcome to my<span class="name"> Blogs </span>.</span> 
                </Typist>
            </div>
            <div className="subhead">
                <a href="#"><img className="" src={logo} alt="" /></a>
            </div>
        </div>
    )
}

export default Header
