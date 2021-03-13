import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link, useParams } from 'react-router-dom'

//RESTAPI_URL
var url=`http://localhost:3001/react179`;

const HooksView=(props)=> {

        //state_object
        var [user, setUser]=useState({});//empty object
       

// var {idno}=this.props.match.params
var {idno}=useParams();//GET_url_Parameter


    //RESTAPI_CALLS
   useEffect(async ()=>
   {
    await axios.get(`${url}/${idno}`)
    .then( (result)=>setUser(result.data) )  
   },[]);


        return (
            <div className="py-5">
                
                <h5 className="text-center"> {user.name} Details are:</h5>


                <table className="table table-bordered table-dark w-50 mx-auto">

                    <tbody>
                        
                        <tr>
                            <th>ID</th>
                            <td>{user.id}</td>
                        </tr>

                        <tr>
                            <th>NAME</th>
                            <td>{user.name}</td>
                        </tr>


                        <tr>
                            <th>COURSE</th>
                            <td>{user.course}</td>
                        </tr>


                        <tr>
                            <th>EMAIL</th>
                            <td>{user.email}</td>
                        </tr>

                        <tr>
                            <th>CITY</th>
                            <td>{user.city}</td>
                        </tr>


                
                        <tr>
                            <th>
                                <Link className="btn btn-success" to='/hooks'> Goto Back </Link>
                            </th>
                            <td>
                                <button className="btn btn-light" onClick={ ()=>window.print() }> Print </button>
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>
        )//return_close
    }//function_close


export default HooksView;
