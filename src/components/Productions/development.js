import React from 'react'
import Development from './../../assets/images/productions/development.png'
import ListIcon from './../../assets/images/productions/Actions-arrow-right-icon.png'
var services=['Feasibility and Requirement Gathering','Analysis', 'Development', 'Maintenance', 'Strategy'];


var styles=
{
    listStyle:`url(${ListIcon})`
}

export default function() {
    return (<>
        <div className="p-2">
            
            <img src={Development} className="w-25 float-left m-3 border" />
            
            <h4>Application Development</h4>

            <p>We make sure that the customized web application development is precisely as per the requirements of the client. We deliver solutions incorporating rich internet applications. By combining our solid cross-vertical experience, technological expertise, latest trends and an inbuilt strategic framework based development methodology we deliver beyond the clients expectations.</p>
            
            <p>
                Our technical experts and project management team will guide you from the initial step of a business idea to implementation of a cost effective software solution. We will deliver a valuable business tool specially designed to serve the specific needs of your business.
            </p>


            <ul style={styles}>
                {
                    services.map( (data,index)=><li key={index}> { data } </li>)
                }
            </ul>


        </div>
    </>)
}
