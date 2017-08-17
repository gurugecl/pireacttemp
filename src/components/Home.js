import React, { Component } from 'react';
import './App.css';
import Jumbotron from "./Jumbotron";

class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron/>
                    <div className="home">
                        <h2>Home</h2>
                        This is the HOME component
                    </div>
            </div>
        )}}

export default Home;