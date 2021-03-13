//services.js -> Services_Module
import React from 'react'

//Imports FontAwesomeIcon ComponentName
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowboarding, faPollH } from '@fortawesome/free-solid-svg-icons'




//internal_styles..
var bgc=
{
  backgroundColor:'#475562'
}


//Services_Component
function Services() {

  return(<React.Fragment>
  
  <div id="services" class="container-fluid" style={bgc}>
      <div class="container p-5 text-center">
       
        <h1 class="pt-2 pb-5 text-white">SERVICES</h1>

        <div class="row">


  <div class="col-lg-4">
    <div class="card text-center text-white p-3 " style={bgc}>
    <p class="text-center"> 
          <FontAwesomeIcon 
          icon={faSnowboarding} 
          className="text-success text-weight-bold" size="3x" />   
    </p>
    <div class="card-body">
      <h3 class="py-3">UX/UI DESIGN</h3>
      <p class="text-justify">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>
    </div>
    </div>
  </div>


  <div class="col-lg-4">
    <div class="card text-center text-white p-3" style={bgc}>

      <p class="text-center"> 
        <FontAwesomeIcon icon={faPollH} 
        className="text-success text-weight-bold" size="3x" />   
      </p>
    <div class="card-body">
      <h3 class="py-3">MARKETING</h3>
      <p class="text-justify">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>
    </div>
    </div>
  </div>


  <div class="col-lg-4">
    <div class="card text-center text-white p-3" style={bgc}>
      <p class="text-center"> 
      <FontAwesomeIcon 
          icon={faSnowboarding} 
          className="text-success text-weight-bold" 
          size="3x" />   
      </p>
    <div class="card-body">
      <h3 class="py-3">BRANDING</h3>
      <p class="text-justify">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>
    </div>
    </div>
  </div>
        </div>

      </div>
    </div>

      </React.Fragment>)
}


export default Services