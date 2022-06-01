import React, { Component, useState, useEffect } from 'react';



export default function Detail({datas, update,id}) {
    // const getDataList=() => {
    //     const data = localStorage.getItem('lists')
    //     if(data){
    //         return JSON.parse(data)
    //     }else{
    //         return []
    //     }
    // }
    // const [lists, setLists]       = useState('')
    const [name, setName]       = useState(datas.name)
    const [des, setDes]         = useState(datas.des)
    const [date, setDate]       = useState(datas.date)
    const [piority, setPiority] = useState(datas.piority)
    const handleAddTask=(e)=>{
        e.preventDefault();

        let list = {
            id,
            name,
            des,
            date,
            piority,
        }
        // setLists([...lists,list]);
        update(list);
        // setName('');
        // setDes('');
        // setDate('');
        // setPiority('');
    }
    // useEffect(() => {
    //     localStorage.setItem('lists',JSON.stringify(lists));
    // },[lists])
    return (
        <div>
            <form method="post" className="form-horizontal" onSubmit={handleAddTask}>
                <div className="card-body" key={datas.name}>
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
                            <input type="text" className="form-control"  onChange={(e)=>setDate(e.target.value)} value={date}
                            data-inputmask-alias="datetime" data-inputmask-inputformat="dd/mm/yyyy" data-mask />
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
                        <button type="submit" className="btn btn-success" name="action" value="save">Update</button>
                    </div>
                
                </div>
                
                </div>
                </form>
            </div>
    )
        
    
}

