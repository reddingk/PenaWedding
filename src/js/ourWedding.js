import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import background from '../assets/imgs/wood1-min.jpeg';

import vineyard1 from '../assets/imgs/vineyard1.jpg';
import vineyard2 from '../assets/imgs/vineyard2.jpg';
import vineyard3 from '../assets/imgs/vineyard3.jpg';
import vineyard4 from '../assets/imgs/vineyard4.jpg';
import vineyard5 from '../assets/imgs/vineyard5.jpg';

class OurWedding extends Component{
    constructor(props) {
        super(props);

        this.state = {
            images: [vineyard1,vineyard2,vineyard3,vineyard4,vineyard5],
            scrollDuration: 8000
        }
    }

    render(){  
        return(
            <div className="page-body ourWedding">
                <div className="innerpage-content">
                    <div className="back-img">
                        <div className="cover"/>
                        <img className="background-img" src={background}></img>
                    </div>
                    
                    <div className="content-header">
                        <span>Our Wedding Day</span>
                        <hr className="brace cwhite"/>                                       
                    </div>

                    <div className="content-section">                        
                        {/*<Carousel className="site-carousel back-carousel" showThumbs={false} showArrows={false} showStatus={false} showIndicators={false} interval={this.state.scrollDuration} infiniteLoop autoPlay>
                            {this.state.images.map((item, i) => 
                                <div className="img-page" key={i}>
                                    <div className="carousel-img-container">
                                        <img className="carousel-img" src={item}></img>
                                    </div>
                                </div>
                            )}
                        </Carousel>*/}

                        <div className="text-content">
                            <div className="inner-container">
                                <p className="fontStyle1">Birch Wood Vineyards</p>
                                <p>199 Rockingham Rd., Derry, NH. 03038</p>
                                <h2>Ceremony</h2>
                                <p>Monday, April 27, 2020</p>
                                <p>4:00 PM</p>  
                                
                                <div className="rsvp-message">To RSVP To Share Our Day With Us Please Mail The Return Note In Your Invitation Or Click Below.</div>
                                <div className="btn-container">
                                    <a href="/rsvp" className="btn light wide">RSVP</a>                              
                                </div>
                            </div>
                        </div>
                        <div className="text-content">
                            <div className="inner-container">
                                <p className="fontStyle1">Birch Wood Vineyards</p>
                                <p>199 Rockingham Rd., Derry, NH. 03038</p>
                                <h2>Cocktails & Reception</h2>
                                                               
                                <div className="rsvp-message">The Cocktail Hour & Reception will follow the ceremony on the same grounds.</div>
                                <p>Cocktail Hour</p>
                                <p>5:00pm</p>

                                <p>Reception</p>
                                <p>6:00 PM</p>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    componentDidMount(){}
}
export default OurWedding;