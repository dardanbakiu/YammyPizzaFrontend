import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Product from './Product';
import Orders from './Orders';
import Header from './Header';
import Fullname from './Fullname';
import Location from './Location';
import { Button } from '@material-ui/core'
import './style/App.css'
import { borders } from '@material-ui/core'
import Footer from './Footer'

class App extends Component {

    state = {
        selectedPizza: [],
        products: " ",
        location: " ",
        fullname: " ",
        date: " ",
        totalPrice: 0,
        fields: {},
        errors: {}
    }



    isChecked = (e) => {


        let checkedValue = e.target.value

        if (e.target.checked) { //here we can see selected pizza name 

            let price = 0
            if (checkedValue === "Cola") {
                price = 4
                let priceState = this.state.totalPrice
                let totalPrice = price + priceState
                this.setState({
                    totalPrice: totalPrice
                })
            }
            if (checkedValue === "Pepsi") {
                price = 4
                let priceState = this.state.totalPrice
                let totalPrice = price + priceState
                this.setState({
                    totalPrice: totalPrice
                })
            }

            if (checkedValue === "Fanta") {
                price = 4
                let priceState = this.state.totalPrice
                let totalPrice = price + priceState
                this.setState({
                    totalPrice: totalPrice
                })
            }

            if (checkedValue === "Cheese") {
                price = 3
                let priceState = this.state.totalPrice
                let totalPrice = price + priceState
                this.setState({
                    totalPrice: totalPrice
                })
            }
            if (checkedValue === "Veggie") {
                price = 5
                let priceState = this.state.totalPrice
                let totalPrice = price + priceState
                this.setState({
                    totalPrice: totalPrice
                })
            }
            if (checkedValue === "Pepperoni") {
                price = 7
                let priceState = this.state.totalPrice
                let totalPrice = price + priceState
                this.setState({
                    totalPrice: totalPrice
                })
            }
            if (checkedValue === "Margherita") {
                price = 8
                let priceState = this.state.totalPrice
                let totalPrice = price + priceState
                this.setState({
                    totalPrice: totalPrice
                })
            }
            if (checkedValue === "Hawaiian") {
                price = 10
                let priceState = this.state.totalPrice
                let totalPrice = price + priceState
                this.setState({
                    totalPrice: totalPrice
                })
            }
            if (checkedValue === "Buffalo") {
                price = 6
                let priceState = this.state.totalPrice
                let totalPrice = price + priceState
                this.setState({
                    totalPrice: totalPrice
                })
            }
            if (checkedValue === "Supreme") {
                price = 10
                let priceState = this.state.totalPrice
                let totalPrice = price + priceState
                this.setState({
                    totalPrice: totalPrice
                })
            }
            if (checkedValue === "Chicken") {
                price = 7
                let priceState = this.state.totalPrice
                let totalPrice = price + priceState
                this.setState({
                    totalPrice: totalPrice
                })
            }

            if (checkedValue === "Mixed") {
                price = 10
                let priceState = this.state.totalPrice
                let totalPrice = price + priceState
                this.setState({
                    totalPrice: totalPrice
                })
            }


            let previousState = [...this.state.selectedPizza]

            // console.log(previousState)

            let isIn = previousState.includes(checkedValue)

            console.log(isIn)
            if (!isIn) {
                previousState.push(checkedValue)
            }

            this.setState({
                selectedPizza: previousState
            })
        }

        if (e.target.checked === false) { //here we can see selected pizza name 


            let previousState = [...this.state.selectedPizza]

            // console.log(previousState)

            let isIn = previousState.includes(checkedValue)

            // console.log(isIn)
            if (isIn) {
                // previousState.push(checkedValue)

                const index = previousState.indexOf(checkedValue);
                if (index > -1) {
                    previousState.splice(index, 1);
                }
            }

            this.setState({
                selectedPizza: previousState
            })


            let price = 0
            if (checkedValue === "Cola") {
                price = 4
                let priceState = this.state.totalPrice
                let totalPrice = priceState - price
                this.setState({
                    totalPrice: totalPrice
                })
            }

            if (checkedValue === "Fanta") {
                price = 4
                let priceState = this.state.totalPrice
                let totalPrice = priceState - price
                this.setState({
                    totalPrice: totalPrice
                })
            }

            if (checkedValue === "Pepsi") {
                price = 4
                let priceState = this.state.totalPrice
                let totalPrice = priceState - price
                this.setState({
                    totalPrice: totalPrice
                })
            }

            if (checkedValue === "Cheese") {
                price = 3
                let priceState = this.state.totalPrice
                let totalPrice = priceState - price
                this.setState({
                    totalPrice: totalPrice
                })
            }
            if (checkedValue === "Veggie") {
                price = 5
                let priceState = this.state.totalPrice
                let totalPrice = priceState - price
                this.setState({
                    totalPrice: totalPrice
                })
            }
            if (checkedValue === "Pepperoni") {
                price = 7
                let priceState = this.state.totalPrice
                let totalPrice = priceState - price
                this.setState({
                    totalPrice: totalPrice
                })
            }
            if (checkedValue === "Margherita") {
                price = 8
                let priceState = this.state.totalPrice
                let totalPrice = priceState - price
                this.setState({
                    totalPrice: totalPrice
                })
            }
            if (checkedValue === "Hawaiian") {
                price = 10
                let priceState = this.state.totalPrice
                let totalPrice = priceState - price
                this.setState({
                    totalPrice: totalPrice
                })
            }
            if (checkedValue === "Buffalo") {
                price = 6
                let priceState = this.state.totalPrice
                let totalPrice = priceState - price
                this.setState({
                    totalPrice: totalPrice
                })
            }
            if (checkedValue === "Supreme") {
                price = 10
                let priceState = this.state.totalPrice
                let totalPrice = priceState - price
                this.setState({
                    totalPrice: totalPrice
                })
            }
            if (checkedValue === "Chicken") {
                price = 7
                let priceState = this.state.totalPrice
                let totalPrice = priceState - price
                this.setState({
                    totalPrice: totalPrice
                })
            }

            if (checkedValue === "Mixed") {
                price = 10
                let priceState = this.state.totalPrice
                let totalPrice = priceState - price
                this.setState({
                    totalPrice: totalPrice
                })
            }

        }



    }

    onNameChange = (e) => {
        this.setState({
            fullname: e.target.value
        })
    }

    onLocationChange = (e) => {
        this.setState({
            location: e.target.value
        })

        let today = new Date();
        let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        let time = today.getHours() + ":" + today.getMinutes();
        let dateTime = date + ' ' + time;
        this.setState({
            date: dateTime
        })

        let text = [...this.state.selectedPizza].toString()


        this.setState({
            products: text
        })

    }


    buyButtonHandle = () => {

        // console.log("selected pizza : " + this.state.selectedPizza)
        // console.log('price : ' + this.state.totalPrice)
        // console.log("fullname:  " + this.state.fullname)
        // console.log("Location:  " + this.state.location)
        // console.log("time : " + this.state.date)
        // console.log(this.state.products)


        if ((this.state.fullname !== " ") && (this.state.location !== " ") && (this.state.totalPrice > 0)) {
            console.log("test here")
            const host = 'http://localhost:8000/api'
 

            fetch(`${host}/order`, {
                method: 'POST',
                body: JSON.stringify(
                   this.state
                ),
                headers: {
                    'Content-Type': 'application/json',
                    'Accpet': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    alert('Success:' + data.msg)
                })

        }

        else {
            alert('Fill the form please, and select a pizza!')
        }
    }



    render() {

        return (

            <div className='App'>
                <Header />


                <div className="main">
                    <div className="threeCenter">
                        <Product doesChecked={this.isChecked}
                            pizzaName={"Cheese"}
                            pizzaImg={'https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_623344781.jpg'}
                            price={3}
                        />

                        <Product doesChecked={this.isChecked}
                            price={5}
                            pizzaName={"Veggie"}
                            pizzaImg={'https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_570541132.jpg'}
                        />

                        <Product doesChecked={this.isChecked}
                            price={7}
                            pizzaName={"Pepperoni"}
                            pizzaImg={'https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_514457074.jpg'}
                        />

                    </div>


                    <div className='threeCenter'>
                        <Product doesChecked={this.isChecked}
                         price={8}
                            pizzaName={"Margherita"}
                            pizzaImg={'https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_347791016.jpg'}
                        />

                        <Product doesChecked={this.isChecked}
                            pizzaName={"Hawaiian"}
                            price={10}
                            pizzaImg={'https://i0.wp.com/www.eatthis.com/wp-content/uploads/2019/01/spicy-hawaiian-pizza.jpg?fit=1200%2C879&ssl=1'}
                        />

                        <Product doesChecked={this.isChecked}
                            pizzaName={"Buffalo"}
                            price={6}
                            pizzaImg={'https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/Buffalo-Chicken-Pizza-1-1024x683.jpg'}
                        />
                    </div>

                    <div className='threeCenter'>
                        <Product doesChecked={this.isChecked}
                            pizzaName={"Supreme"}
                            price={10}
                            pizzaImg={'https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_244706695.jpg'}
                        />


                        <Product doesChecked={this.isChecked}
                            pizzaName={"Chicken"}
                            price={7}
                            pizzaImg={'https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_184944413.jpg'}
                        />

                        <Product doesChecked={this.isChecked}
                            pizzaName={"Mixed"}
                            price={10}
                            pizzaImg={'https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_244706695.jpg'}
                        />
                    </div>

                    <div className='threeCenter'>

                        <Product doesChecked={this.isChecked}
                            pizzaName={"Cola"}
                            price={4}
                            pizzaImg={'https://freevector-images.s3.amazonaws.com/uploads/vector/preview/31728/32501_bigcoke.jpg'}
                        />

                        <Product doesChecked={this.isChecked}
                            pizzaName={"Pepsi"}
                            price={4}
                            pizzaImg={'https://images-na.ssl-images-amazon.com/images/I/515Lwr5CyxL.jpg'}
                        />

                        <Product doesChecked={this.isChecked}
                            pizzaName={"Fanta"}
                            price={4}
                            pizzaImg={'https://ik.imagekit.io/pimberly/595e406f0f15f30010780448/tr:w-1000,h-1000,cm-pad_resize/a7c71201/5d6fa8ae6cb21115740001e3.jpg?product_name=Fanta-Orange-Soft-Drink-330ml-Can-(Pack-of-24)-402006-A00769.jpg'}
                        />

                    </div>

                    <div className="form">
                        <div className='threeCenter'>
                            <Fullname onInputChange={this.onNameChange} />
                        </div>
                        <div className='threeCenter'>
                            <Location onInputChange={this.onLocationChange} />
                        </div>

                    </div>
                    <div className='buyDiv'>
                        <button className="buyBtn" onClick={this.buyButtonHandle} variant="contained" color="secondary" >Buy</button>
                    </div>

                    <Footer />
                </div>
            </div>
        )
    }

}


export default App;
