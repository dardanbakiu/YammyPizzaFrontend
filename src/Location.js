import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

export default class Location extends Component {
    render() {
        return (
            <div>
                <TextField id="filled-basic" label="Location" type="text" onChange={this.props.onInputChange} />
            </div>
        )
    }
}