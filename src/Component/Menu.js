import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
import * as bsIcon from 'react-icons/bs';
export default function Menu() {
    return (
        <>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                
                <a href="index3.html" className="brand-link">
                {/* <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} /> */}
                <span className="brand-text font-weight-light" style={{fontWeight:"600"}}>Task Management</span>
                </a>
                <div className="sidebar">
                    
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li className="nav-item menu-open">
                        <NavLink exact to="/" activeClassName="active">
                            <div className="nav-link active">
                                <bsIcon.BsFillJournalBookmarkFill />
                                
                                <p>
                                    Menu Task
                                </p>
                            </div>
                        </NavLink>
                    </li>

                    </ul>
                </nav>
                </div>
            </aside>
        </>
    )
}
