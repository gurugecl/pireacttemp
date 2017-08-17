import React, { Component } from 'react';
import './App.css';
import Header from './Header';

class Basics extends Component {

    handleChange = () => {
        this.setState({currentPage:'basics'});
    }

    render() {
        return (
            <div className="basics">
                <h2>Basics</h2>
                This is the BASICS component
            </div>
        )}}

export default Basics;

