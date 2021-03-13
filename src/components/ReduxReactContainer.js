import React, { Component } from 'react'

//Step-1 - Connnection of Redux-react
import {connect} from 'react-redux';

//step-3: import Action for actionDispatch purpose
import EmpAction from './../Actions/EmpAction.js'
import UserAction from './../Actions/UserAction.js'
import StudentsAction from './../Actions/StudentsAction.js'

//step-4: bindAction
import { bindActionCreators } from "redux";

class ReduxReactContainer extends Component {
    constructor(props) {
        super(props);
    }

    //Step-7
    componentDidMount()
    {
        this.props.EmpAction();
        this.props.UserAction();
        this.props.StudentsAction();
        
    }
    
    render() {
        return (<>
            <div>
                    <h3>Redux_EMP_ACTION_Data</h3>    
                    {
                        this.props.edata.map( (res,index)=>
                        {
                            return(<ul>
                                        <li>{res.id}</li>
                                        <li>{res.name}</li>
                                  </ul>)
                        })
                    }  



            <h3>Redux_USER_ACTION_Data</h3>    
                    {
                        this.props.udata.map( (res,index)=>
                        {
                            return(<ul>
                                        <li>{res.id}</li>
                                        <li>{res.name}</li>
                                        <li>{res.email}</li>
                                  </ul>)
                        })
                    }  



                <h3>Redux_STUDENTS_ACTION_Data</h3>    
                    {
                        this.props.sdata.map( (res,index)=>
                        {
                            return(<ul>
                                        <li>{res.id}</li>
                                        <li>{res.name}</li>
                                        <li>{res.email}</li>
                                  </ul>)
                        })
                    } 
            </div>
        </>)
    }
}//close_class


//step-6-> To Access the Redux state data from store data,  
//          When after dispatch action 

var mapStateToProps=(state)=>
{
    console.log(state)

    return({
        edata:state.EmpReducer,
        udata:state.UserReducer,
        sdata:state.StudentsReducer
    })
}


//step-5 ->dispatch action data to Reducers then send to store then access from React
var mapDispatchToProps=(dispatch)=>
{
    return bindActionCreators({EmpAction,UserAction,StudentsAction}, dispatch);
}



//export default ReduxReactContainer//React-Component_connection


//Step-2: - Redux_react_Component_connection
export default connect(mapStateToProps,mapDispatchToProps)(ReduxReactContainer)
