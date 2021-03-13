//action is Plain javascript object

import axios from "axios";

//LOCAL_RESTAPI
var url="http://localhost:3001/react179";

export default function StudentsAction()
{
    return({
        type:'studentsData',
        payload:axios.get(url).then((result)=>result.data)
    })

}

