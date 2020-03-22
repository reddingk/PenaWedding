import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

/* Images */
import bouquet from '../assets/imgs/Bouquet-min.png';

import background from '../assets/imgs/wood1-min.jpeg';

import eg8 from '../assets/imgs/engagement/eg8.JPG';

import egf1 from '../assets/imgs/engagement/eg-f1.jpg';
import egf2 from '../assets/imgs/engagement/eg-f2.jpg';
import egf3 from '../assets/imgs/engagement/eg-f3.jpg';
import egf4 from '../assets/imgs/engagement/eg-f4.jpg';

class Home extends Component{
    constructor(props) {
        super(props);

        this.state = {
            scrollDuration: 7000,            
            showThumbs: false,
            carouselData: [egf1,egf3,egf2,egf4]
        }
    }

    render(){  
        return(
            <div className="page-body home">
                <div className="landing">
                    <div className="back-img">
                        <div className="cover"/>
                        <img className="background-img" src={background}></img>
                    </div>
                    <Carousel className="site-carousel main-carousel" showThumbs={this.state.showThumbs} showStatus={false} showIndicators={false} interval={this.state.scrollDuration} infiniteLoop autoPlay>
                        {this.state.carouselData.map((item, i) => 
                            <div className="carousel-page" key={i}>
                                <div className="carousel-img-container">
                                    <img className="carousel-img" src={item}></img>
                                </div>
                            </div>
                        )}
                    </Carousel>

                    <div className="title-text">
                        <div className="line lrg cursive">
                            <span className="name1">Jason</span>
                            <span>&</span>
                            <span className="name2">Rocio</span>
                        </div>
                        <div className="line md"><span>ARE GETTING MARRIED</span></div>
                        <div className="line md"><span>08.27.2020</span></div>
                    </div>
                </div>

                <div className="section welcome">
                    <div className="highlight-img left"><img src={bouquet}></img></div>

                    <div className="section-content">
                        <h1>Welcome</h1>
                        <hr className="brace"/>
                        <p>Thank you for visiting our website to help celebrate our wedding, we are beyond happy for all of the love and support we have gotten.</p>
                    </div>
                </div>

                <div className="spacer right">
                    <div className="back-img">
                        <div className="cover"/>
                        <img className="background-img" src={background}></img>
                    </div>
                    <div className="date">
                        <span className="number c2" data-number="0">0</span>
                        <span className="number c2" data-number="8">8</span>
                    </div>
                </div>

                <div className="section howwemet">
                    <div className="highlight-img right"><img src={bouquet}></img></div>

                    <div className="split-section section-content">
                        <div className="split-content img">
                            <div className="img-container">
                                <img className="split-img" src={eg8}></img>
                            </div>
                        </div>
                        <div className="split-content text">
                            <h1>How We Met</h1>
                            <hr className="brace"/>
                            <h1 className="sub">3rd Time's A Charm</h1>

                            <p><span>Jason and Rocio first met</span> at Phillips Academy while they were both working at the summer program back in 2012. They were both TA’s, Rocio assisting with Math and Jason with College Counseling. They would cross paths without ever exchanging words until one day they had an unexpected encounter.</p> 
                            <p>Rocio and her mother had gone into Best Buy to purchase a universal remote controller her father needed.  As her and mother needed assistance finding the universal remote Rocio had asked a gentleman that just finished helping a couple. <span>As the guy turned around</span> Rocio was caught off guard it was that same guy  she kept on crossing paths with  from Phillips Academy. Jason was quick to  assist  Rocio and  her mother finding the best universal remote  Best Buy carried.</p>
                            <p>As they say 3rd times a charm and Rocio and Jason would meet again. 3rd time they saw each other again they were both out celebrating a mutual friend's birthday without knowing they would both be there. <span>Jason asked for Rocio's number</span>  and the rest is pretty obvious.</p>                            
                        </div>
                    </div>
                </div>

                <div className="spacer left">
                    <div className="back-img">
                        <div className="cover"/>
                        <img className="background-img" src={background}></img>
                    </div>
                    <div className="date">
                        <span className="number c2" data-number="2">2</span>
                        <span className="number c2" data-number="7">7</span>
                    </div>
                </div>

                <div className="section registry">
                    <div className="highlight-img left"><img src={bouquet}></img></div>
                    <div className="section-content">
                        <h1>When We Started Dating</h1>
                        <hr className="brace"/>                        
                        <h1 className="sub">Sticking To One Date</h1>
                        <p>Jason and Rocio made it official on April  27th 2013.  Almost 7 years later and they have chosen to get married on their anniversary date.</p>

                        <h1 className="title-sub">How He Proposed</h1>
                        <hr className="brace"/>
                        <h1 className="sub">Kill 3 Birds With One Stone</h1>

                        <p>Jason and Rocio planned their house warming and Rocio’s birthday into one Celebration. What Rocio didn't know was Jason  had something under his sleeves. He had planned to  propose while she blew out her candles. Everything went exactly as planned and they got to share 3 special moments with  friends and family. Now they can’t wait to celebrate their union alongside everyone.</p>
                    </div>
                </div>

                <div className="spacer right">
                    <div className="back-img">
                        <div className="cover"/>
                        <img className="background-img" src={background}></img>
                    </div>
                    <div className="date">
                        <span className="number c2" data-number="2">2</span>
                        <span className="number c2" data-number="0">0</span>
                    </div>
                </div>

                <div className="section registry" id="registry">
                    <div className="highlight-img right"><img src={bouquet}></img></div>
                    <div className="section-content">
                        <h1>Registry </h1>
                        <hr className="brace"/>                                             
                        <p>We are heading to Jamaica for our honeymoon and plan to do a little sightseeing, a little eating, a little swimming, a little snorkeling, and a little nothing - enjoying a true break from spreadsheets, databases, and counseling ;). We hope you find this registry as a way to help us make our perfect honeymoon come true!</p>
                        
                        <div className="btn-container">
                            <a href="https://www.travelersjoy.com/apenawedding" target="_blank" className="btn light wide">Honeymoon Registry</a>                              
                        </div>                        
                    </div>
                </div>
            </div>
        );
    }
    
    componentDidMount(){}
}
export default Home;