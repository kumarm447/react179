//Home.js -> Services_Module
import React, { Fragment } from 'react'

//Imports React_Routes
import { BrowserRouter  as Routing, Route, Switch, Redirect } from 'react-router-dom';


//Functonal_Components
import Header from './menu/Header'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'
import PageNotFound from './PageNotFound.js'
import Production from './Production'
import PropsObject from './PropsObject.js'


//class_Components
import MYclass from './ClassComponent'
import StateObject from './StateObject.js'
import ReatApi from './ReatApi.js'
import View from './View.js'
import Edit from './Edit.js'
import Signup from './Signup.js'
import ReduxReactContainer from './ReduxReactContainer.js'
import LifeCycle from './LifeCycle'


//Hooks
import HooksCrud from './Hooks/HooksCrud'
import HooksView from './Hooks/HooksView'
import HooksEdit from './Hooks/HooksEdit'
import HooksSignup from './Hooks/HooksSignup'
import Pagination from './Hooks/Pagination'
import ReduxHooks from './ReduxHooks.js'

//App_Component
function App() {

    return(<>
              
              <Routing>
                    
                    <Header />  {/* Component Nesting */}

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/services" component={Services} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/production" component={Production} />
                    <Route path="/props" component={PropsObject} />


                    {/* classComponent */}
                    <Route path="/classes" component={MYclass} />
                    <Route path="/state" component={StateObject} />
                    <Route exact path="/restapi" component={ReatApi} />
                    <Route path="/restapi/view/:idno" component={View} />
                    <Route path="/restapi/edit/:idno" component={Edit} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/reduxreactcontainer" component={ReduxReactContainer} />
                    <Route path="/lifecycle" component={LifeCycle} />
                    {/* classComponent */}

                    {/* HoooksComponent */}
                    <Route exact path="/hooks" component={HooksCrud} />
                    <Route path="/hooks/hooksview/:idno" component={HooksView} />
                    <Route path="/hooks/hooksedit/:idno" component={HooksEdit} />
                    <Route path="/hooksSignup" component={HooksSignup} />
                    <Route path="/pagination" component={Pagination} />
                    <Route path="/reduxhooks" component={ReduxHooks} />
                    {/* HoooksComponent */}
                    
                    
                    <Redirect to="/home" />
                    <Route component={PageNotFound} />
                    
                </Switch>

                    <Footer />  {/* Component Nesting */}

              </Routing>
              
  
          </>)
  
  }


  export default App
  