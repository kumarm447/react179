import axios from 'axios';
import React, { Component } from 'react'

//Api_Url
var url="http://localhost:3001/react179"


export default class Signup extends Component {

    constructor(props) 
    {
        super(props);
    
        this.state = 
        {
            name:'',
            email:'',
            city:'',
            course:'',
            phone:'',
            msg:''
        }
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
  axios.post(url,formdata).then( ()=> this.props.history.push('/restapi') );
  

}



    render() {

        var { name, email, city, course, phone }= this.state


        console.log(this.props);

        return (<>
            
            <div className="container p-5 w-50 mx-auto">

                   

                    <form onSubmit={this.handleSubmit.bind(this)}>

                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" value={name} onChange={ this.handleName.bind(this) } />
                        </div>


                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" value={email} onChange={ this.handleEmail.bind(this) } />
                        </div>

                        <div className="form-group">
                            <label>Course</label>
                            <input type="text" className="form-control" value={course} onChange={ this.handleCourse.bind(this) } />
                        </div>


                        <div className="form-group">
                            <label>City</label>
                            <input type="text" className="form-control" value={city} onChange={ this.handleCity.bind(this) } />
                        </div>

                        <div className="form-group">
                            <label>Phone</label>
                            <input type="number" className="form-control" value={phone} onChange={ this.handlePhone.bind(this) } />
                        </div>


                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Create Account</button>
                        </div>


                    </form>
            </div>
        </>)
    }
}
