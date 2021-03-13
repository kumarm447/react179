
//a reducer is a pure javascript function with arguments [state, action] 

export default function UserReducer(state=[], action)
{

    //conditional_Statements -> if, switch...

    switch(action.type)
    {
        case 'userData': 
                return action.payload; break;
        
        default:
                return state;
    }

}

