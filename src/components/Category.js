import React from 'react';
import '../styles/Category.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

function Category() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        
          <Carousel responsive={responsive} className="carousel">
            <img className="cate blog1" src="https://technext.github.io/original/img/bg-img/b1.jpg" />
            <img className="cate blog2" src="https://mediakix.com/wp-content/uploads/2017/10/top-food-bloggers.jpg" />
            <img className="cate blog3" src="https://technext.github.io/original/img/bg-img/b2.jpg" />
            <img className="cate blog4" src="https://media.theeverygirl.com/wp-content/uploads/2015/03/budget-friendly-fashion-bloggers-8.jpg" />
            <img className="cate blog5" src="https://phlearn.com/wp-content/uploads/2020/01/anastase-maragos-swoo1d3saBQ-unsplash.jpg" />
            
          </Carousel>
        // <Carousel>
        //     <div>
        //         <img className="cate" src="https://technext.github.io/original/img/bg-img/b1.jpg" />
        //         <p className="legend">Lifestyle</p>
        //     </div>
        //     <div>
        //         <img className="cate" src="https://mediakix.com/wp-content/uploads/2017/10/top-food-bloggers.jpg" />
        //         <p className="legend">Food</p>
        //     </div>
        //     <div>
        //         <img className="cate" src="https://technext.github.io/original/img/bg-img/b2.jpg" />
        //         <p className="legend">Travel</p>
        //     </div>
        // </Carousel>
    )
}

export default Category;
