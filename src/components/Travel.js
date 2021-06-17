import React from 'react'
import '../styles/Lifestyle.css';

function Travel() {
    return (
        <div className="container abcde">
            <div className="row mt-5">
                <div className="col-md-6">
                    <a href="https://www.adventurouskate.com/the-8-best-old-towns-in-europe/"><img className="life" src="https://placepass.wpengine.com/wp-content/uploads/2017/11/Adventurous-Kate-The-Solo-Female-Travel-Blog-min-300x197.png" alt="..." /></a>
                </div>
                <div className="col-md-6 mt-5">
                    <div className="line"></div>
                    <a href="#" className="post-tag">Travel</a>
                    <a href="https://www.adventurouskate.com/the-8-best-old-towns-in-europe/"><strong className="quin">
                        Adventurous Kate – The Solo Female Travel Blog
                    </strong></a>
                    <p className="imgtext1 mt-3">
                        Kate McCulley, aka Adventurous Kate, is a professional traveler who shares her 
                        adventures with readers in her solo female travel blog posts. We love this blog 
                        because it includes travel resources, is easy to search, and allows you to browse
                        Kate’s adventures by destination.
                    </p>
                </div>
            </div>         

            <div className="row mt-3 second">
                <div className="col-md-6 mt-5">
                    <div className="line"></div>
                    <a href="#" className="post-tag">Travel</a>
                    <a href="http://www.backpackingmatt.com/escaping-to-chilled-out-oamaru/"><strong className="quin">
                        Backpacking Matt
                    </strong></a>
                    <p className="imgtext1 mt-3">
                        Matt Kyhnn is better known as Backpacking Matt, a travel blogger who explores the world 
                        but has expertise in New Zealand backpacking. The blog is an adventure and lifestyle blog 
                        that features photos and stories of Kyhnn’s travels around New Zealand and the world. 
                    </p>
                </div>
                <div className="col-md-6 mt-3">
                    <a href="http://www.backpackingmatt.com/escaping-to-chilled-out-oamaru/"><img className="life" src="http://www.backpackingmatt.com/wp-content/uploads/2016/07/Bushy-Beach-1024x768.jpg" alt="..." /></a>
                </div>
            </div>    
            <div className="row mt-5">
                <div className="col-9"></div>
                <div className="col-3 ms-2">                    
                    <a href="/travels" className="btn">Read More</a>           
                </div> 
            </div>     
        </div>
    )
}

export default Travel
