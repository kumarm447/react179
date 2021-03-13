import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

//Api_Url
var url="http://localhost:3001/react179"


export default class Edit extends Component {

    constructor(props) {
        super(props)

        this.state=
        {
            name:'',
            email:'',
            city:'',
            course:'',
            phone:'',
            msg:''
        }

    }
    
   
    //Mounting for RESTAPI_Calls
   componentDidMount()
   {
       axios
       .get(`http://localhost:3001/react179/${this.props.match.params.idno}`)
       .then( 
               (result)=>this.setState(result.data)  
           )   
   }


handleName=(element)=>
{
    this.setState({ name: element.target.value  });
}


handleEmail=(element)=>
{
    this.setState({ email: element.target.value  });
}


handleCourse=(element)=>
{
    this.setState({ course: element.target.value  });
}

handleCity=(element)=>
{
    this.setState({ city: element.target.value  });
}

handlePhone=(element)=>
{
    this.setState({ phone: element.target.value  });
}



//formdata_submition
handleSubmit=(e)=>{

    //Clicking on a "Submit" button, prevent it from submitting a form
    //Clicking on a link, prevent the link from following the URL
    e.preventDefault();
         
    var formdata={
                name:`${this.state.name}`,
                email:`${this.state.email}`,
                course:`${this.state.course}`,
                city:`${this.state.city}`,
                phone:`${this.state.phone}`
    }
    
      //axios.post(url,formdata).then( ()=> window.alert('Thank You') );
      //axios.post(url,formdata).then( ()=> this.setState({ msg: '****Your account Created*** '}) );
      axios.put(`${url}/${this.props.match.params.idno}`,formdata).then( ()=> this.props.history.push('/restapi') );
      
    }
    

    render() {

        //URL_Router_paramter_data 
        var {idno}=this.props.match.params

        //state_object_property
        var { name, email, city, course, phone }= this.state

        return (
            <div className="py-5 w-50 mx-auto">
                
                <h5 className="text-center"> {name} Details are:</h5>


                <form onSubmit={this.handleSubmit.bind(this)}>

                      <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" value={name} onChange={ this.handleName.bind(this) } />
                      </div>

                      <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" value={email} onChange={ this.handleEmail.bind(this) } />
                      </div>


                      <div class="form-group">
                        <label>City</label>
                        <input type="text" class="form-control" value={city} onChange={ this.handleCity.bind(this) } />
                      </div>


                      <div class="form-group">
                        <label>Course</label>
                        <input type="text" class="form-control" value={course} onChange={ this.handleCourse.bind(this) } />
                      </div>


                      <div class="form-group">
                        <label>Phone</label>
                        <input type="number" class="form-control" value={phone} onChange={ this.handlePhone.bind(this) } />
                      </div>

                      <div class="form-group">
                      <Link className="btn btn-success" to='/restapi'> Goto Back </Link> &nbsp;&nbsp;
                      <button type="submit" class="btn btn-primary">Update</button>
                      </div>

                </form>
            

            

            </div>
        )
    }
}
