import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './Home';
import Bouquets from './Bouquets';


import './App_carrousel.css';


function AppRouter() {
    return (
            <Router>
   
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-danger">
                <a className="navbar-brand" href="#">Lucy Surprises</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                         <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item active">
                         <Link className="nav-link" to="/Bouquets/">Bouquets</Link>
                    </li>
                    {/* <li className="nav-item">
                    <a className="nav-link" href="#">Happy Customers</a>
                    </li> */}
                </ul>
                {/* <form className="form-inline mt-2 mt-md-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}
                </div>
            </nav>
            <Route path="/" exact component={Home} />
            <Route path="/Bouquets/" component={Bouquets} />
    
            </Router>   
    );
}

export default AppRouter;

