import React, { Component } from 'react';
/* Images */
import defaultImg from '../assets/imgs/no-user.jpg';
import bouquet from '../assets/imgs/Bouquet-min.png';

class RSVP extends Component{
    constructor(props) {
        super(props);

        this.state = {
            lock: false
        }
    }

    render(){  
        return(
            <div className="page-body rsvp">                           
                <div className={"rsvp-container" + (this.state.lock ? " lock" : "")}>
                    <div className="highlight-img left"><img src={bouquet}></img></div>

                    {this.state.lock && <h1 className="rsvp-message">Thank you we have not started accepting RSVP's, we will be sending out our official invitations soon</h1> }
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfiZqw7enTCCThljsPw63HlekMXc3O5dVEqTONaQ8dj2FP-7w/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            </div>
        );
    }
    
    componentDidMount(){}
}
export default RSVP;