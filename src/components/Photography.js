import React from 'react';
import '../styles/Lifestyle.css';


function Photography() {
    return (
        <div className="container last abcdef">
            <div className="row mt-5">
                <div className="col-md-6">
                    <a href="https://www.featureshoot.com"><img className="life" src="https://s3.amazonaws.com/pixpa.com/com/articles/1516554428-Travel%20photography%20%20Fashion%20photography%20%20Documentary%20photography%20%20Editorial%20photography%20%20and%20Portrait%20Photographers%20%20Feature%20Shoot.png" alt="..." /></a>
                </div>
                <div className="col-md-6 mt-5">
                    <div className="line"></div>
                    <a href="#" className="post-tag">Photography</a>
                    <a href="https://www.featureshoot.com"><strong className="quin">
                        Feature Shoot
                    </strong></a>
                    <p className="imgtext1 mt-3">
                        Showcasing the work of established photographers, Feature Shoot focuses on 
                        featuring photo stories across several categories. Topics include portraits, 
                        still life photography, landscapes, fine art, and some of the very best documentary photography.
                    </p>
                </div>
            </div>         

            <div className="row mt-3 second">
                <div className="col-md-6 mt-5">
                    <div className="line"></div>
                    <a href="#" className="post-tag">Photography</a>
                    <a href="http://www.chasejarvis.com/blog/"><strong className="quin">
                        Chase Jarvis
                    </strong></a>
                    <p className="imgtext1 mt-3">
                        Chase Jarvis travels the world capturing both still and motion pictures. 
                        He aims to be “...as creative as possible towards everything I endeavor.” 
                        So, his photography blog features inspiring photo shoots, in addition to 
                        tips on how to improve your photography. 
                    </p>
                </div>
                <div className="col-md-6 mt-3">
                    <a href="http://www.chasejarvis.com/blog/"><img className="life" src="https://s3.amazonaws.com/pixpa.com/com/articles/1516554254-2018-01-21_22-33-49.jpg" alt="..." /></a>
                </div>
            </div>    
            <div className="row mt-5">
                <div className="col-9"></div>
                <div className="col-3 ms-2">                    
                    <a href="/photographs" className="btn">Read More</a>           
                </div> 
            </div>     
        </div>
    )
}

export default Photography
