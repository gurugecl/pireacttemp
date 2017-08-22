import React, { Component } from 'react';

class Jumbotron extends Component {

    scrollWin= (event) => {
        event.preventDefault();
        window.scrollTo(0, 300);
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h1>Hello Students</h1>
                        <p className="lead"><b>Welcome to the ReactJS Template</b></p>
                        <p><a className="btn btn-primary btn-lg" onClick={this.scrollWin.bind(this)} href="#" role="button">Learn More</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Jumbotron;