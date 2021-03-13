import React from 'react'
import {Link, NavLink } from 'react-router-dom';

var menudata=[
  {
    name:'Home',
    routeName:'/home'
  },
  {
    name:'About',
    routeName:'/about'
  },
  {
    name:'Services',
    routeName:'/services'
  },
  {
    name:'Contact',
    routeName:'/contact'
  },
  {
    name:'Production',
    routeName:'/production'
  },
  {
    name:'Props',
    routeName:'/props'
  },
  {
    name:'Classes',
    routeName:'/classes'
  },
  {
    name:'States',
    routeName:'/state'
  },
  {
    name:'Restapi',
    routeName:'/restapi'
  },
  {
    name:'Signup',
    routeName:'/signup'
  },
  {
    name:'ReduxReact',
    routeName:'/ReduxReactContainer'
  },
  {
    name:'LifeCycle',
    routeName:'/lifecycle'
  },
  {
    name:'HooksAPI',
    routeName:'/hooks'
  },
  {
    name:'Pagination',
    routeName:'/pagination'
  },
  {
    name:'HooksSignup',
    routeName:'/hooksSignup'
  },
  {
    name:'ReduxHooks',
    routeName:'/reduxhooks'
  }
]


export default function Header(){
    return(<>
<div className="  w-100">
<nav className="navbar navbar-expand-lg" 
    style={{ 
                backgroundColor:'#475562', 
                borderBottom:'0.5px white solid', 
                borderTop:'0.5px white solid' }}>
    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
  
      {
        
        menudata.map( (res,index)=>{

          return( <NavLink key={index} activeStyle={{
            borderBottom: "2px solid white",
            color: "white"
            }} className="nav-item nav-link text-white text-capitalize" 
            to={res.routeName}> {res.name} </NavLink>
          )

        })

      }
       
		
      </div>
    </div>
  </nav>
  </div>

          </>)
}