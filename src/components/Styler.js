import React, { Component } from 'react';
import './App.css';

class Styler extends Component {

    render() {
        return (
            <div>
                <div className="styles">
                    <h2>CSS</h2>
                    <p>Styling in React can be done using CSS like in regular Javascript. One of the most popular libraries
                    for CSS is bootstrap. Luckily React has it's own implementation of boostrap called React-Bootstrap</p>
                    <h2>Installation</h2>
                    <p>React-Bootstrap can be installed using npm. Here are the commmands for it</p>
                    <div className="bootstrapBox">
                        <p>$ npm install --save react react-dom</p>
                        <p>$ npm install --save react-bootstrap</p>
                    </div>
                    <br/>
                    <p>Once you have installed that you will need to add bootstrap to your file with a style tag like so:</p>
                    <div className="styletagBox">
                        <p>&lt;!-- Latest compiled and minified CSS --&gt;</p>
                        <p>rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></p>
                    </div>
                    <h5><b>ES6 Import Method</b></h5>
                    <div className="styletagBox">
                        <p>import Button from 'react-bootstrap/lib/Button';</p>
                        <p>//or</p>
                        <p>import {'{ Button }'} from 'react-bootstrap';</p>
                    </div>
                    <br/>
                    <p>Luckily for you however we have already imported all those libraries so all you have to do is
                    add the script tag to implement bootstrap</p>
                </div>
            </div>
        )}}

export default Styler;
