import React, { Component } from 'react';

import { Checkbox } from '@material-ui/core'

class Product extends Component {

    render() {
        return (
            <div className="PizzaType">
                <form>
                    <img className="PizzaImg" src={this.props.pizzaImg}></img>
                    <div className="PizzaCheckBox">
                        <label className="priceLabel">Price : {this.props.price}$</label>
                        <Checkbox
                            type="checkbox"
                            onChange={this.props.doesChecked}
                            value={this.props.pizzaName}
                        />

                        <label>{this.props.pizzaName}</label>
                    </div>
                </form>
            </div>
        )
    }
}

export default Product