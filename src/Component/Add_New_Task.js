import React, { Component, useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

export default function Add_New_Task() {
    const getDataList=() => {
        const data = localStorage.getItem('lists')
        if(data){
            return JSON.parse(data)
        }else{
            return []
        }
    }
    const [lists, setLists]       = useState(getDataList())
    const [name, setName]       = useState('')
    const [des, setDes]         = useState('')
    const [date, setDate]       = useState('')
    const [piority, setPiority] = useState('')

    const handleAddTask=(e)=>{
        e.preventDefault();

        let list = {
            name,
            des,
            date,
            piority,
            id: JSON.parse(localStorage.getItem("lists")).length
        }
        setLists([...lists,list]);
        setName('');
        setDes('');
        setDate('');
        setPiority('');
    }
    useEffect(() => {
        localStorage.setItem('lists',JSON.stringify(lists));
    },[lists])
    return (
        <div>
                <div className="wrapper ">
                    <div className="content-wrapper ">
                        <section className="content-header">
                            <div className="col-md-* ">
                                <div className="box box-info">
                                    <div className="box-header with-border">
                                        <h3 className="  col-sm-4 box-title">Add New Task</h3>
                                    </div>
                                    <form method="post" className="form-horizontal" onSubmit={handleAddTask}>
                                        <div className="box-body">
                                            <div className="form-group">
                                                <label htmlFor="inputEmail3" className="col-sm-2 control-label">Name Task</label>
                                                <div className="col-sm-8">
                                                    <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} value={name} id="username" 
                                                    required="required" placeholder="Add new task ..." />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="text" className="col-sm-2 control-label">Desciption</label>
                                                <div className="col-sm-8">
                                                    <textarea class="form-control" rows="3" onChange={(e)=>setDes(e.target.value)} value={des}
                                                    placeholder="Desciption ..."></textarea>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="col-sm-2 control-label" >Date masks:</label>
                                                <div className="col-sm-8">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="far fa-calendar-alt" /></span>
                                                        </div>
                                                        <input  
                                                        className="form-control" 
                                                         onChange={(e)=>setDate(e.target.value)}
                                                          value={date}
                                                        type="date" 
                                                        min="1900-01-01" 
                                                        max="2020-12-31"
                                                        />
                                                    </div>
                                                </div>
                                                
                                            </div>
                                           

                                            <div className="form-group">
                                                <label htmlFor="inputPassword3" className="col-sm-2 control-label">Piority</label>
                                                <div className="col-sm-8">
                                                    <select name="edge" id="edge" onChange={(e)=>setPiority(e.target.value)} value={piority}
                                                    className="form-control select2" style={{ width: '100%' }}>
                                                        <option selected="selected" />
                                                        <option >Low</option>
                                                        <option >Normal</option>
                                                        <option >High</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                            
                                                <div className="col-sm-offset-2 col-sm-4">
                                                    <button type="submit" className="btn btn-success" name="action" value="save">Add</button>
                                                </div>
                                            
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <script>
                </script>
            </div>
    )
}
