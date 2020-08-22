import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
// import NewOrder from './NewOrder';
import Orders from './Orders';
// import Index from './index';
import Home from './About'
import './style/Navbar.css'


class Header extends Component {

    render() {
        return (
            <Router>
                <div>
                    {/* <Link  to="/about">About Us</Link>
                    <Link to="/orders">Orders</Link> */}

                    <nav className="navbar">
                        <label className="navbar-toggle" id="js-navbar-toggle" htmlFor="chkToggle">
                            <i className="fa fa-bars"></i>
                        </label>
                        <a href="#" className="logo"><img className="logoImg" src="https://www.pngitem.com/pimgs/m/33-330754_pizza-tumblr-pizza-cartoon-transparent-background-hd-png.png" /></a>
                        {/* <input type="checkbox" id="chkToggle"></input> */}
                        <ul className="main-nav" id="js-menu">
                            <li>
                                <Link className="nav-links" to="/about">About Us</Link>
                            </li>
                            <li>
                                <Link className="nav-links" to="/orders" >Orders</Link>
                            </li>
                        </ul>
                    </nav>

                    <Route exact path="/about" component={Home} />
                    <Route exact path="/orders" component={Orders} />
                </div>
            </Router>
        )
    }
}

export default Header