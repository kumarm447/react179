import React from 'react'

//Imports React_Routes
import { BrowserRouter  as Routing, Route, Switch, Redirect, Link } from 'react-router-dom';


//Nested_components_imports
import WebsiteDesigning from './Productions/designing.js'
import WebsiteDevelopment from './Productions/development.js'

export default({ location, match })=> 
{

    
    //Object_destructuring
 // var { location, match }=props


    return (<>
      <Routing>
           


            <div className="container p-2">
                <div className="row align-items-center">

                    <div className="col-lg-3">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <Link className="list-group-link"to={`${location.pathname}/website_designing`}>Website Designing</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link className="list-group-link"to={`${match.url}/website_development`}>
                                        Website Development
                                    </Link>
                                </li>
                                <li className="list-group-item">Mobile Apps Development</li>
                                <li className="list-group-item">Website Supports</li>
                                <li className="list-group-item">Advertisements</li>
                                <li className="list-group-item">Hosting Services</li>
                                <li className="list-group-item">Recruting Services</li>
                                
                            </ul>
                    </div>

                    <div className="col-lg-9">
                            <Switch>
                                <Route exact path={match.path} component={WebsiteDesigning} />
                                <Route path={`${match.path}/website_designing`} component={WebsiteDesigning} />
                                <Route path={`${match.path}/website_development`} component={WebsiteDevelopment} />

                                
                            
                            </Switch>
                    </div>
                    

                </div>
            </div>
</Routing>    
    </>)
}
