import React, { Component } from 'react';
import './App.css';
import { ButtonToolbar, Button } from 'react-bootstrap';
import Header from './Header'

class Basics extends Component {

    render() {
        return (
            <div>
                {/*<Header />*/}
                <div className="basics">
                <h2>Understanding ReactJS</h2>
                    <p>ReactJS is a front end Javasript library that makes rendering on the client side much easier.
                    It does this by implementing distinct components and updating state by comparing something called
                    a virtual DOM to the actual DOM. When React notices a difference between the two it will update that
                    specific change and nothing else. In that way ReactJS only updates what's necessary instead of
                    of the entire page which makes it much faster and more efficient.
                    </p>
                    <br/>
                    <img src="https://image.slidesharecdn.com/forslideshare-160211084618/95/reactjs-vs-angularjs-head-to-head-comparison-15-638.jpg?cb=1455181040" alt="VirtualDOM Image" align="center"  width="550" height="400" />
                    <br/><br/>
                    <h2>Components</h2>
                    <p>Each part of a website is broken down into seperate parts called components</p>
                    {/*<img src="/src/components/components.jpeg" alt="Component Image"  width="150" height="100" />*/}
                    <br/>
                    <img src="http://cdn2.w3cplus.com/cdn/farfuture/YRm9L9QOWkyhJ0gMmtAIbMKJKynHxLTYJ-QAjWCSNm4/mtime:1478010525/sites/default/files/blogs/2016/1611/single_page_model_144.png" alt="Component Image"  width="500" height="400" />
                    <br/><br/>
                    <p>These function as seperate sections that can be brought together on the main ReactJS page</p>
                    <p>Here is an example of a basic ReactJS component using ES6 which is the latest JS syntax</p>
                    <br/>
                    <img src="https://image.slidesharecdn.com/003-170302100436/95/003-reactjs-basic-5-638.jpg?cb=1488449490" alt="Component Image"  width="500" height="400" />
                    <h2>JSX</h2>
                    <p>JSX is how you write functionality in React. It is a mixture of Html and Javascript.</p>
                    <p>Here is an example:</p>
                    <div className="jsxexBox">
                        <p>const element = &lt;h1&gt;Hello, world!&lt;/h1&gt;;</p>
                    </div>
                    <br/>
                    <p>Another important concept to understand are <b>State</b> and <b>Props</b>.
                    These are responsible for defining the properties of things as well as making the React application
                    dynamic by updating changes in state as they happen. We will learn more about them in the next section!</p>
                    <div className="buttons">
                        <ButtonToolbar>
                            <Button className="back btn btn-primary btn-lg" href="home" role="button">Back</Button>
                            <Button className="next btn btn-primary btn-lg" href="properties" role="button">Next</Button>
                        </ButtonToolbar>
                    </div>
                </div>
            </div>
        )}}

export default Basics;

