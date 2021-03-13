import React from 'react'


class StateObject extends React.Component //[state belongs to Component Parent Class]
{

    constructor(props) {

        super(props);

        //state_object_declaration..
        this.state=
        {
            email:'kumar@gmail.com', //state_object_initialization..
            name:'kumar'

        }

    }


//user_defined_class_functions..
myfun()
{
    window.alert('User Defined Function-1')
}


my=()=>
{
    window.alert('User Defined Function-2')
}


handleStateChanges=()=> 
{
    this.setState({ 
                    email:'vijaykumar@gmail.com' , 
                    name:'vijaykumar' 
                })
}



    render()
    {


        //object_destructuring_for_state_object
        var { email, name }=this.state

        return(<>


                   <div className="p-5">
                        
                        <h1 className="p-2 text-center"> State Object Example </h1>


                        {/* Access State Object Data */}
                            <p className="text-center"> { email } </p>
                            <p className="text-center"> { name } </p>
                        {/* Access State Object Data */}


                            <br /><br />

                            {/* Events with StateChanges */}

                                <button onClick={ ()=> this.setState({ email:'vijaykumar@gmail.com'})  }> Change_State_object_Email </button> &nbsp;&nbsp;
                                <button onClick={  this.handleStateChanges }> Change_State_object_Email, Name </button> &nbsp;&nbsp;
                                
                                
                            {/* Events */}


                            {/* Events */}
                                <button onClick={ ()=> window.alert('Hi') }> Click-1 </button>
                                
                                <button onClick={ this.myfun }> Click-2 </button>

                                <button onClick={ this.my }> Click-3 </button>
                                
                            {/* Events */}




                            



                   </div>
                

                </>)
    }

}


export default StateObject