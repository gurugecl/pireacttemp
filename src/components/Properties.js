import React, { Component } from 'react';
import './App.css';

class Properties extends Component {
    render() {
        return (
            <div>
                <div className="props">
                <h2>Overview</h2>
                    <p>Properties in ReactJS handle the attributes of the elements. For instance the color
                    or height or some other description of an element. As opposed to State, props in ReactJS
                    are static and do not change. They can also be passed from one component to another</p>
                    <br/>
                    <img src="https://www.codevoila.com/uploads/images/201607/reactjs-state-and-props-demo.png" alt="Props Image"  width="700" height="400" />
                    <br/>
                    <br/>
                    <p>Here is a simple example showing how to define and pass props so that they can be displayed</p>
                    <br/>
                    <h4><b>Initializing Props</b></h4>
                    <div className="settingPropsBox">
                        <p><b>JS</b></p>
                        <p>import React, &#123; Component &#125; from 'react';</p>
                        <br/>
                        <p>class App extends Component &#123;</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;render() &#123;</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>var user = &#123;</b></p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>name: "John"</b></p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>&#125;;</b></p>
                    </div>
                    <br/>
                    <h4><b>Passing Props</b></h4>
                    <div className="settingPropsBox">
                        <p><b>JS</b></p>
                        <p>&#60;p&#62;Hello <b>&#123;this.props.user.name&#125;</b>&#60;p&#47;&#62;</p>
                    </div>
                    <br/>
                    <p>This will display the sentence <b>Hello John</b> as we have set the name of the User to John and are passing it in as
                    this.props.user.name</p>
                </div>
            </div>
        )}}

export default Properties;