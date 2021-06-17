import React from 'react';
import '../styles/Footer.css';
import facebook from '../Images/facebook.png';
import instagram from '../Images/instagram.png';
import whatsapp from '../Images/whatsapp.png';
import Googlemaps from './Googlemaps';

function Footer() {
    return (
        <div className="container-fluid footer">
            <div className="social">Contact Me</div>
            <div className="socialSidebar">  
                <a href='https://www.facebook.com/'><img src={facebook} className="sidebarIcon" /></a>
                <a href='https://www.instagram.com/shivam_k_sinha/'><img src={instagram} className="sidebarIcon" /></a>
                <a href='https://wa.me/+918986619193'><img src={whatsapp} className="sidebarIcon" /></a>
            </div>
            {/* <div className="maps">
                <Googlemaps />
            </div> */}
            <div class="copyright">
                © All rights reserved | 2021
            </div>
            
        </div>
    )
}

export default Footer
