import React from 'react';
import { TableFooter } from '@material-ui/core';
import './style/Footer.css'

function Footer(props) {
    return (
        <div>
            <footer id="red">
                <h1 className="text">TR</h1>
                <h2 className="text2">&copy;INNOSCRIPTA</h2>
                <h2 className="text3">-BY Dardan Bakiu-</h2>
            </footer>
        </div>
    )
}

export default Footer;