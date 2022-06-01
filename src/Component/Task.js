import React, { Component, useState } from 'react'
import Detail from './Detail'


export default function Task() {

    const [dataLists, setDataLists] = React.useState([])
    const [itemselect, setItemSelect] = React.useState([])
    React.useEffect(()=>{
        setDataLists(JSON.parse(localStorage.getItem('lists')) ?? [])
    },[])
    
    
    const updateDatalist=(list) =>{
    
        dataLists[list.id] = {...list}
        localStorage.setItem("lists", JSON.stringify(dataLists))
        setDataLists(JSON.parse(localStorage.getItem('lists')) ?? [])
        
    }
    
    const delDataList = (index) => {
        const rawData = dataLists.slice();
        rawData.splice(index, 1)
        setDataLists(rawData);
        localStorage.setItem("lists",JSON.stringify(rawData))
    }

    const [count, setCount] = useState(-1);

    const handleSelectedItem = (id) => {
        const rawData = itemselect.slice();
        const index = itemselect.findIndex(d=> d === id)
        if(index === -1){
            rawData.push(id)
        }else{
            rawData.splice(index, 1)
        }
        setItemSelect(rawData)
    }

    const handleDeleteMultiple = () => {
        const newData = dataLists.filter(dt=>!itemselect.includes(dt.id))
        setDataLists(newData)
        localStorage.setItem("lists",JSON.stringify(newData))
    }
    return (
        <>
            {
                dataLists.map((data,index) => (
        
                    <div className="card card-secondary ">
                        <div className="card-header" >
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                            <div className='ml-4 mt-2'>
                                <input 
                                type="checkbox" 
                                className=" form-check-input" 
                                id="exampleCheck1"
                                 onChange={() => handleSelectedItem(data.id)}
                                 checked={itemselect.includes(data.id)}
                                 />
                                <h3 className="card-title">{data.name}</h3>
                            </div>
                            <div className='row'>
                                <div>
                                    <button type="button" onClick={() => {
                                        if(count === -1){
                                            setCount(index)
                                        }else{
                                            setCount(-1)
                                        }
                                    }} className="btn btn-block btn-info">Detail</button>
                                </div>
                                <div className='ml-4' >
                                    <button type="button" onClick={() => delDataList(index)}
                                    className="btn btn-block btn-danger" >Remove</button>
                                </div>
                            </div>
                            </div>
                       </div>
                       
                       { count !== index && <div></div>}
                       { count === index && <Detail datas={data} update={updateDatalist} id={index}/>}
                    </div>
               ))
            }
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <h3 className="card-title">Bulk Action: </h3>
                    <div  style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <div className="" >
                            <button type="button" className="btn btn-block btn-info">Done</button>
                        </div>
                        <div className='ml-4'>
                            <button type="button" className="btn btn-block btn-danger" onClick={handleDeleteMultiple}>Remove</button>
                        </div>
                        
                    </div>
                </div>
        </>
    ) 
}
