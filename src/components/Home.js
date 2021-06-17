import React from 'react'
import Navbar from './Navbar';
import Header from './Header';
import Category from './Category';
import Lifestyle from './Lifestyle';
import Sidebar from './Sidebar';
import Food from './Food';
import Travel from './Travel';
import Photography from './Photography';
import Footer from '../components/Footer';

function Home() {
    return (
        <div>
        <Header />
        <Navbar />
        <Category /> 
        {/* <div className="container-fluid">
            <div className="row">
                <div className="col-md-9"> */}
                    <Lifestyle />
                    <Food />
                    <Travel />
                    <Photography />
                {/* </div>
                <div className="col-md-3">
                    <Sidebar /> 
                </div>
            </div>
        </div> */}
        
        
        <Footer />
              
        </div>
    )
}

export default Home;

