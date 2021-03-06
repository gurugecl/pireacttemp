import React, { Component } from 'react';
import './App.css';
import { ButtonToolbar, Button } from 'react-bootstrap';
import SmallJumbotron from "./SmallJumbotron";

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contacts: props.contacts,
            hello: '',
            exclamation: '',
            currentColor: ''
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

    updateColor (event) {
        event.preventDefault();
        var newColor = this.state.currentColor === '' ? '#4d94ff' : '';
        this.setState({
            currentColor: newColor
        })
    }

    render() {
        return (
            <div>
                {/*<SmallJumbotron/>*/}
                <div className="projects">
                    <h2>Hands on Training</h2>
                    <p>The best way to learn how to code is to always try it out yourself. So here are some projects to help you do that.</p>
                    <br/>
                    <h3><b>Project One: Displaying User's Name</b></h3>
                    <p><b>Description:</b> Let set up a project for users to input their name which will then be displayed on the screen with the
                        push of a button</p>
                    <p>Type the following code in your code editor</p>
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
                    <h3><b>Try It...</b></h3>
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

                    {/*Second Project*/}
                    <br/>
                    <h3><b>Project Two: Changing Colors With a Button Click</b></h3>
                    <p><b>Description:</b> Lets set up a project where we can change the background color of a line of text
                    by repeatedly clicking a button</p>
                    <p>Type the following code in your code editor</p>
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
                    <h3><b>Try It...</b></h3>
                    {/*<br/>*/}
                    <h2 style={{background:this.state.currentColor}}><b>Toggle The Background Color of This Text By Clicking The Button Below!</b></h2>
                    <br/>
                    <div className="buttons">
                    <p><a className="btn btn-info btn-lg"  href="#" role="button" onClick={this.updateColor.bind(this)}>Change Color</a></p>
                    </div>
                    <br/>
                    <h3><b>Keep Learning</b></h3>
                    <p>You now have the hands on experience to get started in ReactJS. Below is a Download button that will provide you with a basic template to start your
                        ReactJS journey. Use it to keep learning and practicing and you will become a ReactJS pro in no time!</p>
                    <div className="buttons">
                        <ButtonToolbar>
                            <Button className="download btn btn-success btn-lg" href="#" role="button">DOWNLOAD</Button>
                        </ButtonToolbar>
                    </div>
                    <div className="buttons">
                        <ButtonToolbar>
                            <Button className="single btn btn-primary btn-lg" href="styler" role="button">Back</Button>
                        </ButtonToolbar>
                    </div>
                </div>
            </div>
        )}}



export default Projects;