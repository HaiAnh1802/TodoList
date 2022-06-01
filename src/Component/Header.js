import React, { Component } from 'react'
import * as GoIcons from 'react-icons/go'
import * as FaIcons from 'react-icons/fa'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
import Login from './Login'
export default class Header extends Component {
    
    render() {
        return (
       <div>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
            </li>
            <NavLink exact to="/" activeClassName="active">
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="index3.html" className="nav-link">Home</a>
                </li>
            </NavLink>
            
            </ul>
            <ul className="navbar-nav ml-auto">
            
            <li className="nav-item">
            <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                <i className="fas fa-search" />
            </a>

           <div className="navbar-search-block">
            <form className="form-inline">
                <div className="input-group input-group-sm">
                <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                    <i className="fas fa-search" />
                    </button>
                    <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                    <i className="fas fa-times" />
                    </button>
                </div>
                </div>
            </form>
            </div>

            </li>
            <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="#">
                <i className="fa fa-user-circle" />
                </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <div className="dropdown-divider" />
                <a href="/Login" className="dropdown-item">
                    <GoIcons.GoSignOut className="mr-2"/> LogOut
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  
                    <FaIcons.FaUserEdit className="mr-2" /> SignUp
                </a>
                </div>
            </li>
            </ul>
        </nav>
</div>

        )
    }
}

