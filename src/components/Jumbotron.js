import React, { Component } from 'react';

class Jumbotron extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h1>Hello Students</h1>
                        <p className="lead">Welcome to the ReactJS Template</p>
                        <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn More</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Jumbotron;