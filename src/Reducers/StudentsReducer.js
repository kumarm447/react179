//a reducer is a pure javascript function with arguments [state, action] 

export default function StudentsReducer(state=[], action)
{
    //conditional_Statements -> if, switch...

    switch(action.type)
    {
        case 'studentsData': 
                return action.payload; break;
        
        default:
                return state;
    }

}
