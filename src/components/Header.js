
import { Link } from 'react-router-dom'
import { Navbar } from './bootstrap.css';
import './App.css';
import logo from '../logo.svg';
import React, { Component } from 'react';
import SmallJumbotron from './SmallJumbotron'


class Header extends Component {


constructor(props, context) {
    super(props, context);
    this.state = {
        currentPage: 'home',
        jumboHeader: '',
        jumboText: ''
    }
}


    handleChange = (page, header, text) => {
        this.setState({
            currentPage:page,
            jumboHeader:header,
            jumboText: text
        });
    };

    render() {

        var smalljumbotron;

        if(this.state.currentPage === 'home'){
            smalljumbotron = '';
        } else {
            smalljumbotron = <SmallJumbotron jumboHeader={this.state.jumboHeader} jumboText={this.state.jumboText} />;
        }

        return (
    <header className="navbar navbar-default">
        <div className="container">
            <div className="navbar-header">
                <a className="navbar-brand">ReactTemplate</a>
            <div id="navbar">
                <ul className="nav navbar-nav">
                    <li className={(this.state.currentPage === 'home') ? 'active': ''}><Link onClick={() => this.handleChange('home')} to='/'>Homes</Link></li>
                    <li className={(this.state.currentPage === 'basics') ? 'active': ''}><Link onClick={() => this.handleChange('basics','Basics', 'Introduction to React')} to='/basics'>Basics</Link></li>
                    <li className={(this.state.currentPage === 'properties') ? 'active': ''}><Link onClick={() => this.handleChange('properties', 'Props', 'Learn about Properties')} to='/properties'>Props</Link></li>
                    <li className={(this.state.currentPage === 'stater') ? 'active': ''}><Link onClick={() => this.handleChange('stater', 'State', 'Learn about State')} to='/stater'>State</Link></li>
                    <li className={(this.state.currentPage === 'styler') ? 'active': ''}><Link onClick={() => this.handleChange('styler', 'Styles', 'How to add Styling')} to='/styler'>Styling</Link></li>
                    <li className={(this.state.currentPage === 'projects') ? 'active': ''}><Link onClick={() => this.handleChange('projects', 'Projects', 'Practice Projects')} to='/projects'>Projects</Link></li>
                    <img src={logo} className="App-logo" alt="logo" />
                </ul>
            </div>
            </div>
        </div>
        {smalljumbotron}
    </header>
);}}

export default Header


