import React, { Component } from 'react';

class SmallJumbotron extends Component {

    render() {

        return (
        <div>
                <div className="smallJumbotron">
                    <div className="container">
                        <h1><b>{this.props.jumboHeader}</b></h1>
                        <p className="lead"><b>{this.props.jumboText}</b></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SmallJumbotron;
