import React, { Component } from 'react';
import './App.css';
import SmallJumbotron from "./SmallJumbotron";

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contacts: props.contacts,
            hello: '',
            exclamation: ''
        };
    }

    addContact(event) {
        event.preventDefault();
        let name = this.refs.name.value;
        this.setState({
            contacts: name,
            hello: 'Hello',
            exclamation: '!'
        })
    }

    render() {
        return (
            <div>
                <SmallJumbotron/>
                <div className="projects">
                    <h2>Try It</h2>
                    <p>The best way to learn how to code is always to practice. So here are some projects to help you do that.</p>
                    <p>Try the following code in your code editor</p>
                    <br/>
                    <div className="tryHtmlBox">
                        <p><b>HTML</b></p>
                        <p>&lt;!doctype html&gt;</p>
                        <p>&lt;html lang=&quot;en&quot;&gt;</p>
                        <p>&nbsp;&nbsp;&nbsp;&lt;head&gt;</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta charset=&quot;utf-8&quot;&gt;</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1, shrink-to-fit=no&quot;&gt;</p>
                        <p>&nbsp;&nbsp;&nbsp;&lt;/head&gt;</p>
                        <br/>
                        <p>&nbsp;&nbsp;&nbsp;&lt;body&gt;</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div id=&quot;root&quot;&gt;&lt;/div&gt;</p>
                        <p>&nbsp;&nbsp;&nbsp;&lt;/body&gt;</p>
                        <p>&lt;/html&gt;</p>
                    </div>
                    <br/>
                    <div className="tryJSBox">
                        <p><b>JS</b></p>
                        <p>const element = (</p>
                        <p>&nbsp;&nbsp;&nbsp;&lt;h1&gt;</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello Student!</p>
                        <p>&nbsp;&nbsp;&nbsp;&lt;h1&gt;</p>
                        <p>);</p>
                        <br/>
                        <p>ReactDOM.render(</p>
                        <p>&nbsp;&nbsp;&nbsp;element,</p>
                        <p>&nbsp;&nbsp;&nbsp;document.getElementById('root')</p>
                        <p>);</p>
                    </div>
                    <br/>
                    <p><b>Please Enter Your Name</b></p>
                    <form onSubmit={this.addContact.bind(this)}>
                        <label>
                            Name:
                            <input type="text" ref="name" placeholder="Enter Name" />
                        </label>
                        <input type="submit"/>
                    </form>
                    <h3><b>{this.state.hello} {this.state.contacts}{this.state.exclamation}</b></h3>
                </div>
            </div>

            //Add a section about changing the color by clicking a button
        )}}



export default Projects;