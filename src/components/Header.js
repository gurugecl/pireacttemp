// import React, from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from './bootstrap.css';
import './App.css';
import logo from '../logo.svg';
import React, { Component } from 'react';


class Header extends Component {

    // handleChange = () => {
    //     this.setState({currentPage:'basics'});
    // }

    constructor(props, context) {
        super(props, context);
        this.state = {
            currentPage: 'home',
        }
    }

    render() {
        return (
    <header className="navbar navbar-default">
        <div className="container">
            <div className="navbar-header">
                <a className="navbar-brand">ReactTemplate</a>
            <div id="navbar">
                <ul className="nav navbar-nav">
                    <li className={(this.state.currentPage === 'home') ? 'active': ''}><Link onClick={this.change.bind(this,'home')} to='/'>Homes</Link></li>
                    <li className={(this.state.currentPage === 'basics') ? 'active': ''}><Link onClick={this.change.bind(this,'basics')} to='/basics'>Basics</Link></li>
                    <li className={(this.state.currentPage === 'properties') ? 'active': ''}><Link to='/properties'>Props</Link></li>
                    <li className={(this.state.currentPage === 'stater') ? 'active': ''}><Link to='/stater'>State</Link></li>
                    <li className={(this.state.currentPage === 'forms') ? 'active': ''}><Link to='/forms'>Forms</Link></li>
                    <li className={(this.state.currentPage === 'tables') ? 'active': ''}><Link to='/tables'>Tables</Link></li>
                    <img src={logo} className="App-logo" alt="logo" />
                </ul>
            </div>
            </div>
        </div>
    </header>
);}}

export default Header


// const Header = () => (
// <header className="navbar navbar-default">
//     <div className="container">
//         <div className="navbar-header">
//             <a className="navbar-brand">ReactTemplate</a>
//         </div>
//         <div id="navbar">
//             <ul className="nav navbar-nav">
//                 <li className={(this.props.currentPage === 'home') ? 'active': ''}><Link to='/'>Homes</Link></li>
//                 <li className={(this.props.currentPage === 'basics') ? 'active': ''}><Link to='/basics'>Basics</Link></li>
//                 <li className={(this.props.currentPage === 'forms') ? 'active': ''}><Link to='/forms'>Forms</Link></li>
//                 <li className={(this.props.currentPage === 'tables') ? 'active': ''}><Link to='/tables'>Tables</Link></li>
//                 <img src={logo} className="App-logo pullRight" alt="logo" />
//             </ul>
//         </div>
//     </div>
// </header>
// );