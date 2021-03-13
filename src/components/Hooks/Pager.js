import React from 'react'

export default function Pager(props) {

//Empty array
var numbers=[];

//Decide_Number_Buttons_Required
var TotalButtons=Math.ceil(props.TotalAPIPosts/props.MaxPostsPerButton)

//for Loop
for(var i=1;i<=TotalButtons;i++)
{
    numbers.push(i);
    //array.push()
}

    return (
        <div>
             {/* Pagination */}
             <nav className="pb-5">
                    <ul className="pagination justify-content-center">
                       {
                           numbers.map((btno,index)=><li className="page-item" key={index}>
                                                        <a onClick={()=>props.btnUpdates(btno)} 
                                                        className="page-link" href="#">{btno}</a>
                                                     </li>)
                       }
                    </ul>
                </nav>
            {/* Pagination */}
        </div>
    )
}
