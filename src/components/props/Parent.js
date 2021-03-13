import React from 'react'

//Nested_component_of_parent
import Child from './Child'


import EMPDATA from './../../assets/json/emp.json'


export default function Parent() {

let name="Vijaykumar"
let phone=7896541230
let email="Vijaykumar@metrolabs.com"

//arrays, object, functions...


var moduleCode=EMPDATA.map( (data,index)=>
{
    return(<ul key={index}>
            <li>{data.id}</li>
            <li>{data.name}</li>
            <li>{data.email}</li>
            <li>{data.phno}</li>
        </ul>)
})


function myfun()
{
    return "This is Function";
}


    return (<>
                <div className="border p-5">
                    <h1> Parent Component </h1>
                    {name}-{phone}-{email}


                    <br /> <br />

                    { moduleCode }





                    <Child 
                    name={name} 
                    phone={phone} 
                    email={email} 
                    my={ myfun } 
                    fun={ ()=> "this is another Function" }
                    jsonModule={moduleCode} 
                    />

                </div>
        </>)
}
