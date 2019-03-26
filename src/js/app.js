import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

/* Components */
import UC from './uc';
import Home from './home';

/* Styles */
import "../css/app.less";

const routes = [
    { path:"/aboutUs", component:UC},
    { path:"/events", component:UC },
    { path:"/weddingParty", component:UC },
    { path:"/registry", component:UC }    
];

const SiteRoutes = route => (
    <Route path={route.path} render={props => ( <route.component {...props} />)} />
);

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){     
        return(
            <Router>
                <div className="app-body">
                    {/* HEADER */}
                    <nav className="navbar navbar-expand-lg bg-dark">
                        <Link className="navbar-brand navbar-brand-centered" to="/">
                            <div className="initialLogo">
                                <span className="initial1">J</span>
                                <span className="initial2">R</span>
                            </div>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav nav-left">
                                <Link className="nav-item nav-link" to="/aboutUs">About Us</Link>
                                <Link className="nav-item nav-link" to="/events">Events</Link>
                            </div>

                            <div className="navbar-nav ml-auto nav-right">
                                <Link className="nav-item nav-link" to="/weddingParty">Wedding Party</Link>
                                <Link className="nav-item nav-link" to="/registry">Registry</Link>
                            </div>
                        </div>
                    </nav>

                    {/* BODY */}
                    <Route exact path="/" component={Home} />
                    { routes.map((route, i) => <SiteRoutes key={i} {...route} />) }

                    {/* FOOTER */}
                    <div className="footer">Footer</div>
                </div>
            </Router>
        );
    }

    componentDidMount(){}
}

export default App;