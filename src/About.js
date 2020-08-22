import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import NewOrder from './NewOrder';
import Orders from './Orders';
import Header from './Header';
import './style/About.css'

class About extends Component {

    render() {

        return (
            <div className="about">
                <img className="aboutImg" src="https://www.pngitem.com/pimgs/m/33-330754_pizza-tumblr-pizza-cartoon-transparent-background-hd-png.png"/>
                <p> Our drivers carry less than AWG 35 You must ask for this limited time offer. Minimum purchase required for delivery. Delivery charge and tax may apply. Prices, delivery area and charges may vary. Checks are not accepted. ©2015 Yummy's IP Holder LLC. Yummy's®, Yummy's Pizza® are registered trademarks of Yummy's IP Holder LLC. "Coca-Cola" and the Contour Bottle design are registered trademarks of The Coca-Cola Company.</p>
             </div>
        )
    }

}

export default About;
