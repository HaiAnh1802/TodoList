import React, { Component, useState } from 'react'

import Task from './Task'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

export default function Dashboard() {
    
    const getDataList=() => {
        const data = localStorage.getItem('lists')
        if(data){
            return JSON.parse(data)
        }else{
            return []
        }
    }
    const dataLists = getDataList()
    console.log(dataLists)
    return (
        <div>
        <div className="content-wrapper">
            <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-4">
                    <div className="col-sm-6">
                        <h1 className="m-0">To Do List</h1>
                    </div>
                </div>
            </div>
            </div>
            <section className="content">
            <div className="container-fluid">
                <div className="row ml-2">
                    <div className="col-lg-">
                    <NavLink exact to="/Add_New_Task" activeClassName="active">
                        <span class="btn btn-success col fileinput-button">
                            <i class="fas fa-plus"></i>
                            <span>Add Task</span>
                        </span>
                    </NavLink>
                    </div>
                    
                </div>
                <div className=" ml-2 mt-4" >
                { dataLists.length < 1 && <div>Please add task...</div>}
                { dataLists.length >= 1 && <Task />}
                {/* { dataLists.length >= 1 && <Task dataLists={dataLists} />}  */}
                </div>

            </div>

              
          
            </section>
        </div>
        </div>
    )
}
