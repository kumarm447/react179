import React from 'react'

export default function Child({ name,email,my,fun, jsonModule }) {

    return (<>
                <div className="border p-5">
                    <h1> Child Component </h1>

                    <h3>{ name }</h3>
                    <p>{ email }</p>

                    <p>{ my() }</p>

                    <p>{ fun() }</p>


                    {
                        jsonModule 
                    }

                </div>
        </>)
}
