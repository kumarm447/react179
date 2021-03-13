import axios from 'axios';
import React, { useState, useEffect } from 'react'

//Api_Url
var url="http://localhost:3001/react179"


const HooksSignup =(props)=>{

        var [user,setUser]=useState({
                    name:'',
                    email:'',
                    city:'',
                    course:'',
                    phone:'',
                    msg:''
               })

var { name, email, city, course, phone }= user;

const handleFormData=(element)=>
    {
      setUser({...user, [element.target.name]:element.target.value });
    }
    

//formdata_submition
const handleSubmit=async (e)=>{

//Clicking on a "Submit" button, prevent it from submitting a form
//Clicking on a link, prevent the link from following the URL
e.preventDefault();
     
var formdata={
            name:`${user.name}`,
            email:`${user.email}`,
            course:`${user.course}`,
            city:`${user.city}`,
            phone:`${user.phone}`
}

  //axios.post(url,formdata).then( ()=> window.alert('Thank You') );
  //axios.post(url,formdata).then( ()=> this.setState({ msg: '****Your account Created*** '}) );
  await axios.post(url,formdata).then( ()=> props.history.push('/hooks') );
  
}


        return (<>
            
            <div className="container p-5 w-50 mx-auto">

                    <form onSubmit={handleSubmit.bind(this)}>

                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" value={name} name="name" onChange={ handleFormData.bind(this) } />
                        </div>


                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" value={email} name="email" onChange={ handleFormData.bind(this) } />
                        </div>

                        <div className="form-group">
                            <label>Course</label>
                            <input type="text" className="form-control" value={course} name="course" onChange={ handleFormData.bind(this) } />
                        </div>


                        <div className="form-group">
                            <label>City</label>
                            <input type="text" className="form-control" value={city} name="city" onChange={ handleFormData.bind(this) } />
                        </div>

                        <div className="form-group">
                            <label>Phone</label>
                            <input type="number" className="form-control" value={phone} name="phone" onChange={ handleFormData.bind(this) } />
                        </div>


                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Create Account</button>
                        </div>


                    </form>
            </div>
        </>)
}


export default HooksSignup