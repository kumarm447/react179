//action is Plain javascript object

import axios from "axios";

//GLOBAL_RESTAPI
var url="https://jsonplaceholder.typicode.com/users";

export default function UserAction()
{
    return({
        type:'userData',
        payload:axios.get(url).then((result)=>result.data)
    })

}

