import React, { Component } from 'react';

import eg1 from '../assets/imgs/engagement/eg1.JPG';
import eg2 from '../assets/imgs/engagement/eg2.JPG';
import eg3 from '../assets/imgs/engagement/eg3.JPG';
import eg4 from '../assets/imgs/engagement/eg4.JPG';
import eg5 from '../assets/imgs/engagement/eg5.JPG';
import eg6 from '../assets/imgs/engagement/eg6.JPG';
import eg7 from '../assets/imgs/engagement/eg7.JPG';
import eg8 from '../assets/imgs/engagement/eg8.JPG';
import eg9 from '../assets/imgs/engagement/eg9.JPG';

class AboutUs extends Component{
    constructor(props) {
        super(props);

        this.state = {}
    }

    render(){  
        return(
            <div className="page-body aboutUs">
                <div className="innerpage-content">
                    <div className="content-header">
                        <h1>About Us</h1>
                        <hr className="brace"/>                                       
                    </div>

                    <div className="card-container">
                        <div className="card-row">
                            <div className="flip-card sz10">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <div className="about-question">Who was the first to speak?</div>
                                        <img src={eg2} alt="img2" />                                
                                    </div>

                                    <div class="flip-card-back c1">
                                        <div className="about-answer">Jason</div>                                        
                                    </div>
                                </div>
                            </div>

                            <div className="flip-card sz5">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <div className="about-question">Who likes to cook more?</div>
                                        <img src={eg3} alt="img3" />                                
                                    </div>

                                    <div class="flip-card-back c2">
                                        <div className="about-answer">Rocio</div>                                       
                                    </div>
                                </div>
                            </div>

                            <div className="flip-card sz5">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <div className="about-question">What is a perfect day for Jason?</div>
                                        <img src={eg7} alt="img7" />                                
                                    </div>

                                    <div class="flip-card-back c3">
                                        <div className="about-answer">Sleeping & Making Pasta</div>  
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-row">                            
                            <div className="flip-card sz5">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <div className="about-question">Who likes to cook more?</div>
                                        <img src={eg4} alt="img4" />                                
                                    </div>

                                    <div class="flip-card-back c4">
                                        <div className="about-answer">Rocio</div>                                       
                                    </div>
                                </div>
                            </div>

                            <div className="flip-card sz5">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <div className="about-question">What is a perfect day for Rocio?</div>
                                        <img src={eg1} alt="img1" />                                
                                    </div>

                                    <div class="flip-card-back c5">
                                        <div className="about-answer">Making Music</div>  
                                    </div>
                                </div>
                            </div>

                            <div className="flip-card sz10">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <div className="about-question">Where was our first date?</div>
                                        <img src={eg6} alt="img6" />                                
                                    </div>

                                    <div class="flip-card-back c6">
                                        <div className="about-answer">The Movies</div>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    componentDidMount(){}
}
export default AboutUs;