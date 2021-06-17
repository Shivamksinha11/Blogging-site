import React from 'react';
import '../styles/Lifestyle.css';

function Food() {
    return (
        <div className="container abcd">
            <div className="row mt-5">
                <div className="col-md-6">
                    <a href="https://food52.com/?__cf_chl_jschl_tk__=5d0442d7bc9adb37e66321bed5c71d6f81c8a43b-1623386858-0-AWi2YwjUhSc0ZlH_t_VMoWVGPrJQ28H0nDktVevV2t4KM1WyBkpOhVWohNfjaS6-4UNoHc1zWwajV00RzlI1yjNQlskZ-4vALLgjk-AJXnv2SfmN6ABC4MqLk1-Dm57Fm3IaF8oc7DUc_UoJICASIahxzS9R3Wu4H5qFOilXo4kIUzV7mLyTrKy-SSWk0GP06cGaiYboZGPtWwIZWqCt30ULiNzOn8SCsnxqOGRtcBiWbdtqUkTczMc48dMXsw4mZ1cbPTTNoD22YlTNXM1KSsD-ZMU9aHjK5d4TW3V8hh3NYxeA9ddPNMRpHOeG5_3j90votiMFr_zJJ2I2tQbaqscjSgPY1Ynw0nPS5Xf2X8cj-M4XfcuOFd4Bb9rwD9B-P-krBzupTTsr_qLHfKf9nhc"><img className="life" src="https://www.chefspencil.com/wp-content/uploads/Food52.jpg.webp" alt="..." /></a>
                </div>
                <div className="col-md-6 mt-5">
                    <div className="line"></div>
                    <a href="#" className="post-tag">Food</a>
                    <a href="https://food52.com/?__cf_chl_jschl_tk__=5d0442d7bc9adb37e66321bed5c71d6f81c8a43b-1623386858-0-AWi2YwjUhSc0ZlH_t_VMoWVGPrJQ28H0nDktVevV2t4KM1WyBkpOhVWohNfjaS6-4UNoHc1zWwajV00RzlI1yjNQlskZ-4vALLgjk-AJXnv2SfmN6ABC4MqLk1-Dm57Fm3IaF8oc7DUc_UoJICASIahxzS9R3Wu4H5qFOilXo4kIUzV7mLyTrKy-SSWk0GP06cGaiYboZGPtWwIZWqCt30ULiNzOn8SCsnxqOGRtcBiWbdtqUkTczMc48dMXsw4mZ1cbPTTNoD22YlTNXM1KSsD-ZMU9aHjK5d4TW3V8hh3NYxeA9ddPNMRpHOeG5_3j90votiMFr_zJJ2I2tQbaqscjSgPY1Ynw0nPS5Xf2X8cj-M4XfcuOFd4Bb9rwD9B-P-krBzupTTsr_qLHfKf9nhc"><strong className="quin">
                        Food52
                    </strong></a>
                    <p className="imgtext1 mt-3">
                        When it comes to the ‘official version’, so to speak, of food blogging, the culinary 
                        magazines are on top. This is literary the case with Food52, which ranks amongst the 
                        gods of the social media food show with no less than 2.7m followers on Instagram. Like 
                        all the respected magazines out there, Food52 has its “how to” perks – we can assure 
                        you, you won’t get enough of it.
                    </p>
                </div>
            </div>         

            <div className="row mt-3 second">
                <div className="col-md-6 mt-5">
                    <div className="line"></div>
                    <a href="#" className="post-tag">Food</a>
                    <a href="https://www.seriouseats.com/"><strong className="quin">
                        Serious Eats
                    </strong></a>
                    <p className="imgtext1 mt-3">
                        Here is a packed food and drink award-winning culinary website that began life in 2006, 
                        “a leading resource for all food and drink”. The authors pride themselves on coming up with 
                        only “meticulously tasted recipes that really work” – and that’s one good reason to check this 
                        one out rather than many other food blogs that feature the recipe you’re looking for. 
                    </p>
                </div>
                <div className="col-md-6 mt-3">
                    <a href="https://www.seriouseats.com/"><img className="life" src="https://www.chefspencil.com/wp-content/uploads/Serious-Eats.jpg.webp" alt="..." /></a>
                </div>
            </div>    
            <div className="row mt-5">
                <div className="col-9"></div>
                <div className="col-3 ms-2">                    
                    <a href="/foods" className="btn">Read More</a>           
                </div> 
            </div>     
        </div>
    )
}

export default Food
