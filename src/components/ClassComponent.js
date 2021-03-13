import React, {Component} from 'react' 

//Step-1 - Connnection of Redux-react
import {connect} from 'react-redux';

//step-3: import Action for actionDispatch purpose
import UserAction from './../Actions/UserAction.js'

//step-4: bindAction
import { bindActionCreators } from "redux";

//Child Class
class MYclass extends Component //[Default Parent class in React Package]
{

    constructor(props)
    {
       super(props);
    }

     //Step-7
     componentDidMount()
     {
         this.props.UserAction(); 
     }

    //user_Defined_class_functions
    myfun()
    {
        return "This is Myfun Statement"
    }


//JSX
render()
{
    //js_statements
    console.log(this.props)

    

    //Object destructuring 
    var {history,location,match}=this.props

    return(<>
               
               <div className="container p-5">

                        <h1> CLASS COMPONENT IN REACT </h1>

                        { this.myfun() }

                        <br />

                        {match.url}

                        <br />

                        {location.pathname}

                        <br />

                        {history.location.pathname}




                    <h1>REDUX_USER_ACTION_DATA</h1>

                  
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





               </div>


            </>)
}


}//close_Class


//step-6-> To Access the Redux state data from store data,  
//          When after dispatch action 

var mapStateToProps=(state)=>
{
    //console.log(state)

    return({
        udata:state.UserReducer,
    })
}


//step-5 ->dispatch action data to Reducers then send to store then access from React
var mapDispatchToProps=(dispatch)=>
{
    return bindActionCreators({UserAction}, dispatch);
}


//Step-2: - Redux_react_Component_connection
export default connect(mapStateToProps,mapDispatchToProps)(MYclass)