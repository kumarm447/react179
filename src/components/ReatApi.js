import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


//RESTAPI
var url='http://localhost:3001/react179'


export default class ReatApi extends Component {

     //Mounting for state_Calls
    constructor(props) 
    {
        super(props)
    
        this.state = 
        { 
           
            users:[],
        }


    }


    

    //Mounting for RESTAPI_Calls
    async componentDidMount()
    {
        await axios
        .get(url)
        .then( 
                (result)=>this.setState({ users:result.data  })  
            )   
    }
    

    handleDelete=async (id)=>
    {
        
        if(window.confirm(`Please Delete ${id} Record Now? `))
        {
            await axios.delete(`${url}/${id}`)
        }

        await axios.get(url).then( (result)=>this.setState({ users:result.data  })  );

    }


     //Mounting for Output Preparation
    render() {


        //Main_router_Name- restapi
        var { path } =this.props.match
        
     

        
        return (<>
            <div className="container-fluid py-2">
                
                <h1 className="text-center py-3"> USERS RestAPI Data </h1>
                
              

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
                        
                        this.state.users.map( (res,index)=>
                        {
                            return(<tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{res.name}</td>
                                    <td>{res.course}</td>
                                    <td>{res.email}</td>
                                    <td>
                                        <Link className="btn btn-primary" to={`${path}/view/${res.id}`}>
                                            View
                                        </Link>
                                    </td>

                                    <td>
                                        <Link className="btn btn-warning" to={`${path}/edit/${res.id}`}>
                                                Edit
                                        </Link>
                                    </td>

                                    <td>
                                        <button 
                                        onClick={ ()=>this.handleDelete(res.id) }  className="btn btn-danger">
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


}

