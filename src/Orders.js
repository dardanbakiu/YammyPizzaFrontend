import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import axios from 'axios';
import './style/App.css'
import './style/Orders.css'


class Orders extends Component {

    state = {
        data: []
    }

    

    componentDidMount() {
        const host = 'http://localhost:8000/api'

        axios.get(`${host}/data`)
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
    }

    prevState = this.state.data;

    componentDidUpdate(prevProps, prevState) {
        const host = 'http://localhost:8000/api'
        if (prevState !== this.state.data) {
            axios.get(`${host}/data`)
                .then(res => {
                    this.setState({
                        data: res.data
                    })
                })
        }
    }

    render() {
        return (
            <div className="orderDiv">

                <h2 className="Title">Orders </h2>
                <table id="customers">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Full Name</th>
                            <th>Order</th>
                            <th>Location</th>
                            <th>Price</th>

                        </tr>
                    </tbody>
                    {
                        this.state.data.map(data => {
                            return (
                                <tbody>
                                    <tr>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.fullName}</td>
                                        <td>{data.pizzaType}</td>
                                        <td>{data.location}</td>
                                        <td>{data.price}$</td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                </table>
            </div>

        )
    }
}

export default Orders