import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

/* Images */
import demo1 from '../assets/imgs/demo1.jpeg';
import demo2 from '../assets/imgs/demo2.jpeg';
import demo3 from '../assets/imgs/demo3.jpeg';
import demo4 from '../assets/imgs/demo4.jpeg';

import eg1 from '../assets/imgs/eg1.jpg';
import eg2 from '../assets/imgs/eg2.jpg';
import eg3 from '../assets/imgs/eg3.jpg';
import eg4 from '../assets/imgs/eg4.jpg';
import eg5 from '../assets/imgs/eg5.jpg';
import eg6 from '../assets/imgs/eg6.jpg';

class Home extends Component{
    constructor(props) {
        super(props);

        this.state = {
            scrollDuration: 7000,            
            showThumbs: false,
            carouselData: [eg6,eg2,eg3,eg4]
        }
    }

    render(){  
        return(
            <div className="page-body home">
                <div className="landing">
                    <div className="back-img">
                        <div className="cover"/>
                        <img className="background-img" src={demo2}></img>
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
                </div>

                <div className="section welcome">
                    <div className="border-style1 c1">
                        <h1>Welcome</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </div>

                <div className="spacer right">
                    <div className="back-img">
                        <div className="cover"/>
                        <img className="background-img" src={demo2}></img>
                    </div>
                    <div className="date">
                        <span class="number c3" data-number="0">0</span>
                        <span class="number c3" data-number="4">4</span>
                    </div>
                </div>
            </div>
        );
    }
    
    componentDidMount(){}
}
export default Home;