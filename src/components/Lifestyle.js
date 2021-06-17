import React from 'react';
import '../styles/Lifestyle.css';
import { Link } from 'react-router-dom';
function Lifestyle() {
    return (
        <div className="container abc">
            <div className="row mt-5">
                <div className="col-md-6">
                    <a href="https://quintessenceblog.com/"><img className="life" src="https://firstsiteguide.com/wp-content/uploads/2021/03/Quintessence.jpg" alt="..." /></a>
                </div>
                <div className="col-md-6 mt-5">
                    <div className="line"></div>
                    <a href="#" className="post-tag">Lifestyle</a>
                    <a href="https://quintessenceblog.com/"><strong className="quin">
                        Quintessence
                    </strong></a>
                    <p className="imgtext1 mt-3">
                        Launched in 2010 by Stacey Bewkes, Quintessence is a lifestyle blog that guides us through 
                        arts, architecture, design, travel, fashion, and interior design while offering original 
                        content for anyone looking for inspiration.
                    </p>
                </div>
            </div>         

            <div className="row mt-3 second">
                <div className="col-md-6 mt-5">
                    <div className="line"></div>
                    <a href="#" className="post-tag">Lifestyle</a>
                    <a href="https://www.theblondeabroad.com/travel-blog/"><strong className="quin">
                        The Blonde Abroad
                    </strong></a>
                    <p className="imgtext1 mt-3">
                        If you have the travel bug, then Kiki’s lifestyle blog is an optimal place to explore potential 
                        destinations, read about her experiences, and more. Also, she shares breathtaking pictures of all 
                        the places she visits, allowing us to live vicariously through her travels.
                    </p>
                </div>
                <div className="col-md-6 mt-3">
                    <a href="https://www.theblondeabroad.com/travel-blog/"><img className="life" src="https://firstsiteguide.com/wp-content/uploads/2021/03/blonde-abroad-1536x737.jpg" alt="..." /></a>
                </div>
            </div>    
            <div className="row mt-5">
                <div className="col-9"></div>
                <div className="col-3 ms-2">                    
                    <Link to={"/lifestyles"}><button className="btn">Read More</button></Link>                
                </div> 
            </div>     
        </div>
    )
}

export default Lifestyle
