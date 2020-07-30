import React, { Component } from 'react';

/* Images */
import bouquet from '../assets/imgs/Bouquet-min.png';

class Updates extends Component{
    constructor(props) {
        super(props);

        this.state = {}
    }

    render(){  
        return(
            <div className="page-body updates">
                <div className="highlight-img left"><img src={bouquet}></img></div>
                <div className="innerpage-content">
                    <div className="content-header">
                        <h1>Wedding Updates</h1>
                        <hr className="brace"/>                                       
                    </div>

                    <div className="update-container">
                        <div className="update-item">
                            <h3>Face Coverings</h3>
                            <p>We are excited about our upcoming day, As you prepare to celebrate with us we are asking all guests to <b>please bring a face covering</b> with them to the ceremony.  As it will not be manditory during the ceremony we would like all of our guest to be prepared with one to comply with changing regulations. </p>
                            <p>We have also been assured that the venue has been doing an amazing job keeping a clean and safe venue for all events and guests.  If you have any questions or concerns please feel free to contact either one of us. </p>
                        </div>

                        <div className="update-item">
                            <h3>Out Of Town Guests</h3>
                            <p>To stay up to date with the changing regulations on travel we ask that all guests that are traveling from out of the state <b>please stay up to date with the travel restrictions</b>, Feel free to contact us if there are any questions.</p>
                            <p>Those traveling through or staying in <b>Massachusetts</b> please be aware of the <a href="https://www.mass.gov/info-details/covid-19-travel-order" target="_blank">Travel Order & Travel Form</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    componentDidMount(){}
}
export default Updates;