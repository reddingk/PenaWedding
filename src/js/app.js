import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

/* Components */
import UC from './uc';
import Home from './home';
import OurWedding from './ourWedding';
import WeddingParty from './weddingParty';
import RSVP from './rsvp';
import AboutUs from './aboutUs';

/* Styles */
import "../css/app.less";

const routes = [
    { path:"/aboutUs", component:AboutUs},
    { path:"/ourWedding", component:OurWedding },
    { path:"/weddingParty", component:WeddingParty },
    { path:"/rsvp", component:RSVP }    
];

const SiteRoutes = route => (
    <Route path={route.path} render={props => ( <route.component {...props} />)} />
);

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            activeAlert:true
        };

        this.animateToggle = this.animateToggle.bind(this);
    }

    render(){     
        return(
            <Router>
                <div className="app-body">                    
                    {/* HEADER */}
                    <div className="navbar-container">
                        {/* ALERT */}
                        <div className="alert alert-light alert-dismissible fade show" role="alert">
                            <h1>Wedding Announcement</h1>
                            <p>
                                Unfortionately due to what has taken place with the COVID-19 pandemic we have had to <b>Postpone</b> our wedding celebration.
                                We will be moving our wedding from Monday April 27, 2020 to <b>Thursday August 27, 2020</b>.  If you are unable to attend due to this date change please
                                let us know to help us plan accordingly.
                            </p>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <nav className="navbar navbar-expand-lg bg-dark">
                            <Link className="navbar-brand navbar-brand-centered" to="/">
                                <div className="initialLogo">
                                    <div className="initial-wrapper">
                                        <span className="initial1">J</span>
                                        <span className="initial2">R</span>
                                    </div>
                                </div>
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <div id="menuIcon" className="animateMenu" onClick={this.animateToggle}>
                                    <div className="bar1"></div>
                                    <div className="bar2"></div>
                                    <div className="bar3"></div>
                                </div>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav nav-left">
                                    <Link className="nav-item nav-link" to="/ourWedding">Our Wedding</Link>
                                    <Link className="nav-item nav-link" to="/aboutUs">About Us</Link>
                                </div>

                                <div className="navbar-nav ml-auto nav-right">
                                    <Link className="nav-item nav-link" to="/weddingParty">Wedding Party</Link>
                                    <Link className="nav-item nav-link" to="/rsvp">RSVP</Link>
                                </div>

                                <div className="registry-link">
                                    <a href="https://www.travelersjoy.com/apenawedding" target="_blank" className="btn nav wide">Registry</a>
                                </div>
                            </div>
                        </nav>
                    </div>

                    {/* BODY */}
                    <Route exact path="/" component={Home} />
                    { routes.map((route, i) => <SiteRoutes key={i} {...route} />) }

                    {/* FOOTER */}
                    <div className="footer">
                        <span className="special">#APenaWedding</span>
                        <span>08.27.2020</span>
                    </div>
                </div>
            </Router>
        );
    }

    componentDidMount(){}
    
    animateToggle(e) {
        var element = document.getElementById("menuIcon");
        element.classList.toggle("change");
    }
}

export default App;