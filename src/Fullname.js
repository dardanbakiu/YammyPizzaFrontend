import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

export default class Fullname extends Component {
    render() {
        return (
            <div>
                <TextField id="filled-basic" label="Full Name" type="text" onChange={this.props.onInputChange} />
            </div >
        )
    }
}