import React, { Component } from 'react';
import './App.css';
import { ButtonToolbar, Button } from 'react-bootstrap';

class Stater extends Component {

    render() {
        return (
            <div>
                <div className="state">
                <h2>Overview</h2>
                    <p>
                        State in React is used to handle updates to the component. As you can guess, state in ReactJS
                        is dynamic while props are not. State updates are also triggered from within the component while props
                        are passed in from outside the component. Changes in state can happen for instance due to user triggers such as clicks and hovering over a
                        button or other object.
                    </p>
                    <br/>
                    <img src="https://image.slidesharecdn.com/areactjourney-160705113743/95/corso-su-reactjs-11-638.jpg?cb=1467718751" alt="State Image"  width="700" height="400" />
                    <br/>
                    <br/>
                    <p>Here is a simple example showing how we set state initially and how we would update it due to a trigger such as clicking
                    a button. This would trigger the handleUpdateState function and set the state of currentPage to the page variable
                    being passed into the function</p>
                    <br/>
                    <h4><b>Setting State</b></h4>
                    <div className="settingStateBox">
                        <p><b>JS</b></p>
                        <p>constructor(props, context) &#123;</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;super(props, context);</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.state = &#123;</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;currentPage: 'home'</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;</p>
                        <p>&nbsp;&nbsp;&#125;</p>
                    </div>
                    <br/>
                    <h4><b>Updating State</b></h4>
                    <div className="settingStateBox">
                        <p><b>JS</b></p>
                        <p>handleUpdateState = (page) => &#123;</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.setState(&#123;</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;currentPage:page</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</p>
                        <p>&nbsp;&nbsp;};</p>
                    </div>
                    <div className="buttons">
                        <ButtonToolbar>
                            <Button className="back btn btn-primary btn-lg" href="#" role="button">Back</Button>
                            <Button className="next btn btn-primary btn-lg" href="#" role="button">Next</Button>
                        </ButtonToolbar>
                    </div>
                </div>
            </div>
        )}}

export default Stater;
