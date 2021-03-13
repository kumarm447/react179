//Home.js -> Services_Module
import React, { Fragment } from 'react'

//imports images 
import Profile from './../assets/images/profile.jpg';
import HomeBackgroundImage from './../assets/images/jumbotron-backgrounds.png';


//internalStyles
var Jumbotrons={
    background:`url(${HomeBackgroundImage}) no-repeat`,
    backgroundSize:'100% 100%',
    marginBottom:'0px',
    padding:'200px 0px'
}


//Home_Component
function Home() {

    //local_variable
    var local_title="Home Component"


    return(<Fragment>
              
             
            
              {/* Home Component */}

              <div className="jumbotron text-white" style={ Jumbotrons  } id="home">

<div className="container">

    <div className="row">

    <div className="col-lg-6 ">
    
     
        <h1 className="h1 pt-5 mt-5">I am Kumar.Manjula</h1>
        <h5 className="bg-success p-2 mt-3 w-75 text-center">Fullstack Developer & Instructor</h5>
            
        </div>

        <div className="col-lg-6">
            <img src={Profile} className="w-75 mx-auto img-thumbnail" />
        </div>
    </div>

</div>
</div>

              {/* Home Component */}
            
        
                
  
          </Fragment>)
  
  }


  export default Home
  