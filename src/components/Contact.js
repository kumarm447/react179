//contact.js -> Contact_Module
import React from 'react'

//Imports FontAwesomeIcon ComponentName
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlenderPhone,faStar,faSmile  } from '@fortawesome/free-solid-svg-icons'



//Styles
var bgc={ backgroundColor: '#000212' }

//Contact_Component
function Contact()
{
  return(<>
            
            <div class="container-fluid" style={bgc} id="contact">
        <div class="container p-5 text-center">

          <h1 class="pt-2 pb-3 text-white">CONTACT</h1>
         
          <div class="row">
  
  
            <div class="col-lg-4">
              <div class="card text-center text-white p-3 border-0 " style={bgc}>
                <i class="far fa-smile text-weight-bold text-success"></i>
                <p class="text-center"> 
                    <FontAwesomeIcon 
                    icon={faSmile} 
                    className="text-success text-weight-bold" size="3x" />   
               </p>
              <div class="card-body">
                <h5 class="py-1">ADDRESS</h5>
                <h6>Sree Raman Towers,Kothapet</h6>
              </div>
              </div>
            </div>
          
          
            <div class="col-lg-4">
              <div class="card text-center text-white p-3  border-0" style={bgc}>
                <i class="fab fa-font-awesome-flag text-success text-weight-bold"></i>
                <p class="text-center"> 
                    <FontAwesomeIcon 
                    icon={faBlenderPhone} 
                    className="text-success text-weight-bold" size="3x" />   
                    
               </p>
                <div class="card-body">
                  <h5 class="py-1">PHONE NUMBER</h5>
                  <h6>040-254685, 79894563210</h6>
                </div>
              </div>
            </div>
          
          
            <div class="col-lg-4">
              <div class="card text-center text-white p-3  border-0" style={bgc}>
                <i class="far fa-star text-success text-weight-bold"></i>
                <p class="text-center"> 
                    <FontAwesomeIcon 
                    icon={faStar} 
                    className="text-success text-weight-bold" size="3x" />   
               </p>
                <div class="card-body">
                  <h5 class="py-1">WEBSITE</h5>
                  <h6><a href="https://ambesttechnologies.com" class="text-white">https://ambesttechnologies.com</a></h6>
                </div>
              </div>
            </div>
  
                  </div>



                  <div class="row">

                    <div class="col-lg-4">
                      <div class="form-group">
                        <input type="text" class="form-control bg-dark" placeholder="Name:*" />
                      </div>
                    </div>

                    <div class="col-lg-4">
                      <div class="form-group">
                        <input type="text" class="form-control bg-dark" placeholder="Email:*" />
                      </div>
                    </div>

                    <div class="col-lg-4">
                      <div class="form-group">
                        <input type="text" class="form-control bg-dark" placeholder="Phno:*" />
                      </div>
                    </div>


                    <div class="col-lg-12">
                      <div class="form-group">
                        <textarea class="form-control bg-dark" style={{ height:'200px' }} placeholder="Message*"></textarea>
                      </div>
                    </div>


                    <div class="col-lg-12">
                      <div class="form-group">
                        <button type="submit" class="btn btn-success float-right">Send Message</button>
                      </div>
                    </div>


                   

                  </div>
  
        </div>
      </div>

    </>)
}

export default Contact