import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Pager from './Pager'


//GLOBAL_RESTAPI
var url='https://jsonplaceholder.typicode.com/posts'

const Pagination=(props)=> {

//State_Object for APIDATA...
var [Posts,setPosts]=useState([]);


//Display_Max_Records_per_Action
var [MaxPosts]=useState(8);

//Activate_First_Button_for_Default_Max_records_to_display_into_Component
var [activateFirstBtn,setBtnChanges]=useState(1);


//select_First_last_index_for_Every_Action
var LastIndex=activateFirstBtn*MaxPosts;//1*5->5 

var FirstIndex=LastIndex-MaxPosts;//5-5->0

var currentDisplayPosts=Posts.slice(FirstIndex,LastIndex);//Index,maxRecords


//RESTAPI CALLS...
useEffect(async () => {
    await axios.get(url).then( (result)=>setPosts(result.data) )  
}, []);




//Btn_updates
var handleBtnChanges=(ButtonNo)=>
{
    setBtnChanges(ButtonNo);
}


    return (<>
        <div className="container p-5">
                

     <h5>Showing {activateFirstBtn}- {MaxPosts} of {Posts.length} Results for "Posts" </h5>
        
               
        <Pager 
        TotalAPIPosts={Posts.length} 
        MaxPostsPerButton={MaxPosts}
        btnUpdates={ (ButtonNo)=>handleBtnChanges(ButtonNo) }  />
           

            
             {/* APIDATA LISTING */}
             
             {
                 currentDisplayPosts.map((res,index)=>{
                     return(<ul key={index} className="list-unstyled">
                                    <li>
                                        <h4>{res.id}.{res.title}</h4>
                                        <p>{res.body}</p>
                                    </li>
                            </ul>)
                 })
             }

             {/* APIDATA LISTING */}



        </div>
    </>)
}

export default Pagination