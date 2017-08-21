import React, { Component } from 'react';
import './App.css';
import Jumbotron from "./Jumbotron";


class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron/>
                    <div className="home" classID="home">
                        <h2>Introduction</h2>
                        <p>This template will serve as a guide to introduce you to the exciting world of ReactJS. ReactJS is a new and
                        cutting edge javascript library that allows you to render much faster and efficiently on the client side. It's
                        popularity has been skyrocketing lately and learning ReactJS will give you a great advantage when building websites. So Lets
                        get started!</p>
                        {/*<br/>*/}
                        <h2>Prerequisites</h2>
                        <p>Here's what you need to know to get started coding in ReactJS</p>
                        <p>Basic understanding of:</p>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Bootstrap</li>
                                <li>Javasript</li>
                            </ul>
                        <p>Install the following:</p>
                        <ul>
                            <li>Bootstrap</li>
                            <li>Node</li>
                        </ul>

                        <p>A working understanding of html, css, javascript will be necessary to get started. ReactJS uses JSX which is a mixture
                            of Javascript and html.</p>

                        <h2>Setup</h2>
                        <p>Please go to the following link to get started with ReactJS: <a href="https://facebook.github.io/react/docs/installation.html">Create-React-App</a></p>
                        <p>Then open up a Git Bash terminal and type the following commands in order. Make sure you have Node set up. Substitute "my-app" for the name of the project you wish to create.</p>
                        <div className="homeBox">
                            <p>npm install -g create-react-app</p>
                            <p>create-react-app my-app</p>
                            <br/>
                            <p>cd my-app</p>
                            <p>npm start</p>
                        </div>
                        <p>Your app will now open in <a href="http://localhost:3000/">localhost:3000</a></p>
                        <p>You are now ready to get started! On to the next section</p>
                    </div>
            </div>
        )}}

export default Home;