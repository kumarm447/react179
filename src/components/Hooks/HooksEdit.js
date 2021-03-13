import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link, useParams, useHistory } from 'react-router-dom'

//Api_Url
var url="http://localhost:3001/react179"


var HooksEdit=(props)=>
{

//State_object   
var [user,setUser]=useState({
            name:'',
            email:'',
            city:'',
            course:'',
            phone:'',
            msg:''
        })
       

var {idno}=useParams();

var history=useHistory();


//state_object_property
 var { name, email, city, course, phone }= user
    
   
    //Mounting for RESTAPI_Calls
   useEffect(async ()=>
   {
       await axios
       .get(`http://localhost:3001/react179/${idno}`)
       .then( 
               (result)=>setUser(result.data)  
           )   
   },[]);




/*
const handleName=(element)=>
{
    setUser(element.target.value);
}


const handleEmail=(element)=>
{
    setUser(element.target.value);
}


const handleCourse=(element)=>
{
    setUser(element.target.value);
}

const handleCity=(element)=>
{
    setUser(element.target.value);
}

const handlePhone=(element)=>
{
    setUser(element.target.value);
}
*/


const handleFormData=(element)=>
{
  setUser({...user, [element.target.name]:element.target.value });

  //element.target.value
  //element.target.name-> name, email, city,cours,phone
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
      await axios.put(`${url}/${idno}`,formdata).then( ()=> history.push('/restapi') );
    }
    

return (<>
            <div className="py-5 w-50 mx-auto">
                
                <h5 className="text-center"> {name} Details are:</h5>


                <form onSubmit={handleSubmit.bind(this)}>

                      <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" name="name" value={name} onChange={ handleFormData.bind(this) } />
                      </div>

                      <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" name="email" value={email} onChange={ handleFormData.bind(this) } />
                      </div>


                      <div class="form-group">
                        <label>City</label>
                        <input type="text" class="form-control" name="city" value={city} onChange={handleFormData.bind(this) } />
                      </div>


                      <div class="form-group">
                        <label>Course</label>
                        <input type="text" class="form-control" name="course" value={course} onChange={ handleFormData.bind(this) } />
                      </div>


                      <div class="form-group">
                        <label>Phone</label>
                        <input type="number" class="form-control" name="phone" value={phone} onChange={ handleFormData.bind(this) } />
                      </div>

                      <div class="form-group">
                      <Link className="btn btn-success" to='/restapi'> Goto Back </Link> &nbsp;&nbsp;
                      <button type="submit" class="btn btn-primary">Update</button>
                      </div>

                </form>
            

            

            </div>
        
        </>)//return_close
    }//function_close


export default HooksEdit;
