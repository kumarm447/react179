import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

//RESTAPI
var url='http://localhost:3001/react179'


const HooksCrud=(props)=> 
{

//State_Object...
var [Users,setUsers]=useState([])//empty Array state

//RESTAPI CALLS...
useEffect(async () => {
    await axios.get(url).then( (result)=>setUsers(result.data) )  
}, []);

//CurrentRouteName in URL
var { path } =props.match //'hooks'


//deleteApiData
const handleDelete=async (id)=>
{

    if(window.confirm(`Please Delete ${id} Record Now? `))
    {
        await axios.delete(`${url}/${id}`)
    }

    await axios.get(url).then( (result)=>setUsers(result.data));
}


        return (<>
      

<div className="container-fluid py-2">
                
                <h1 className="text-center py-3"> HOOKS RestAPI Data </h1>
                
                   <table className="table table-bordered table-dark">

                       <thead className="table-info text-dark">
                           <th>SNO</th>
                           <th>NAME</th>
                           <th>COURSE</th>
                           <th>EMAIL</th>
                           <th colSpan="3">ACTION</th>
                       </thead>

                       <tbody>
                       {
                        
                        Users.map( (res,index)=>
                        {
                            return(<tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{res.name}</td>
                                    <td>{res.course}</td>
                                    <td>{res.email}</td>
                                    <td>
                                        <Link className="btn btn-primary" to={`${path}/hooksview/${res.id}`}>
                                            View
                                        </Link>
                                    </td>

                                    <td>
                                        <Link className="btn btn-warning" to={`${path}/hooksedit/${res.id}`}>
                                                Edit
                                        </Link>
                                    </td>

                                    <td>
                                        <button 
                                         className="btn btn-danger" onClick={ ()=>handleDelete(res.id) }>
                                            Delete
                                        </button>
                                    </td>

                                    
                            </tr>)
                        })
                    }
                       </tbody>
                   </table>


            </div>
        </>)
}

export default HooksCrud
