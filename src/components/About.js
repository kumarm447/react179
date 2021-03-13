//About.js -> About_Module
import React,{Fragment} from 'react'


//images
import Profile from './../assets/images/profile.jpg';
import bgImage from './../assets/images/jumbotron-backgrounds.png';


//Internal_Styles
var h20={ height:'20px' }


var tables=
{
  background:`url(${bgImage}) no-repeat`,
  backgroundSize:'100% 100%',
  borderRadius:'10px' 
}


//About_Component
function About(props)
{

let name="Vijaykumar"
let phone=7896541230
let email="Vijaykumar@metrolabs.com"


console.log(props);


  return(<Fragment>
            
  <div id="about" className="container-fluid" style={{  backgroundColor:'#12151c' }}>

<div className="container p-5 w-75 text-center">

  <h1 className="display-4 text-white font-weight-bold py-3">ABOUT US</h1>
  <p className="text-white pb-3">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
  </p>


  <div className="jumbotron text-white"  style={tables}>

   <div className="row">
     <div className="col-lg-6">

      <div className="container w-100" >

        <table className="table table-borderless text-white" >
       
      <tbody>
          <tr>
            <th></th>
            <td><img src={Profile} style={{ borderRadius:'20px', width:'35%', height:'60px' }} /></td>
          </tr>
       
          <tr>
            <th>FULLNAME</th>
            <td>{name}</td>
          </tr>

          <tr>
            <th>Birthday</th>
            <td>15/06/1987</td>
          </tr>

          <tr>
            <th>Mobile No</th>
            <td>{phone}</td>
          </tr>

          <tr>
            <th>Email id</th>
            <td>{email}</td>
          </tr>
    </tbody>
       
      </table>
      </div>

     </div>
     <div className="col-lg-6">

      <h4>SKILLS</h4>

      <p className="text-left">HTML5 & CSS3</p>
      <div className="progress" style={h20}>
        <div className="progress-bar bg-success" style={{  width:'95%' }} >95%</div>
      </div>

      <p className="text-left pt-4">BOOTSTRAP4</p>
      <div className="progress" style={h20}>
        <div className="progress-bar bg-success"  style={{ width:'90%' }} >90%</div>
      </div>

      <p className="text-left pt-4">JAVASCRIPT & JQUERY</p>
      <div className="progress" style={h20}>
        <div className="progress-bar bg-success"  style={{  width:'85%' }} >85%</div>
      </div>

      <p className="text-left pt-4">ANGULAR</p>
      <div className="progress" style={h20}>
        <div className="progress-bar bg-success"  style={{  width:'78%' }} >78%</div>
      </div>

     </div>
   </div>

  </div>

</div>

</div>



      </Fragment>)
}

export default About