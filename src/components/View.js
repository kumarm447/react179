import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class View extends Component {

    constructor(props) {
        super(props)

        this.state=
        {
            user:{}
        }

    }
    
   
    //Mounting for RESTAPI_Calls
   componentDidMount()
   {
       axios
       .get(`http://localhost:3001/react179/${this.props.match.params.idno}`)
       .then( 
               (result)=>this.setState({ user:result.data  })  
           )   
   }


    render() {

        //URL_Router_paramter_data 
        var {idno}=this.props.match.params

        //state_object_property
        var {user}=this.state

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
                                <Link className="btn btn-success" to='/restapi'> Goto Back </Link>
                            </th>
                            <td>
                                <button className="btn btn-light" onClick={ ()=>window.print() }> Print </button>
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>
        )
    }
}
