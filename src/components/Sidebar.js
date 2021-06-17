import React from 'react';
import '../styles/Sidebar.css';
import {Link} from 'react-scroll';

function Sidebar() {
    return (
        
        <div className="container sidebar mt-5">
            <div className="row">
                <div className="col tags">
                    <strong>Tags</strong>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col sm-6">
                    <Link to="abc"><a className="btn btn1 me-5 mb-5">Lifestyle</a></Link>
                    <Link to="abcd"><a className="btn btn1 mb-5">Food</a></Link>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Link to="abcde"><a className="btn btn1 me-5 mb-5">Travel</a></Link>
                    <Link to="abcdef"><a className="btn btn1 mb-5">Photography</a></Link>
                </div>
            </div>
            
        </div>

    )
}

export default Sidebar
