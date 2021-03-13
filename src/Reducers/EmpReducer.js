
//a reducer is a pure javascript function with arguments [state, action] 

export default function EmpReducer(state=[], action)
{

    //conditional_Statements -> if, switch...

    switch(action.type)
    {
        case 'empData': 
                return action.payload; break;
        
        default:
                return state;
    }

}

