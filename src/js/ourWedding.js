import React, { Component } from 'react';

import demo2 from '../assets/imgs/demo2.jpeg';
import vineyard1 from '../assets/imgs/vineyard1.jpg';
import vineyard2 from '../assets/imgs/vineyard2.jpg';
import vineyard3 from '../assets/imgs/vineyard3.jpg';

class OurWedding extends Component{
    constructor(props) {
        super(props);

        this.state = {}
    }

    render(){  
        return(
            <div className="page-body ourWedding">
                <div className="innerpage-content">
                    <div className="back-img">
                        <div className="cover"/>
                        <img className="background-img" src={demo2}></img>
                    </div>
                    
                    <div className="content-header">
                        <div className="word">                   
                            <span className="number c1" data-number="Our">Our</span>
                        </div> 
                        <div className="word">                   
                            <span className="number c1" data-number="Wedding">Wedding</span>
                        </div> 
                        <div className="word">                   
                            <span className="number c1" data-number="Day">Day</span>
                        </div>                  
                    </div>

                    <div className="content-section">                        
                        <img className="content-img" src={vineyard1}></img>
                        <div className="text-content">
                            <div className="inner-container">
                                <p className="fontStyle1">Boston Vineyards</p>
                                <p>123 Main St., Boston, MA.</p>
                                <h2>Ceremony</h2>
                                <p>Friday, April 15, 2020</p>
                                <p>5:00 PM</p>                                
                            </div>
                        </div>
                        <div className="text-content">
                            <div className="inner-container">
                                <p className="fontStyle1">Boston Vineyards</p>
                                <p>123 Main St., Boston, MA.</p>
                                <h2>Reception</h2>
                                <p>To reception will follow on the same grounds as our ceremony.</p>
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