import React, { Component, setState } from 'react'

export default class LifeCycle extends Component {

    //step-1
    constructor(props) {
        super(props)

        this.state=
        {
            counter:0,
            email:''
        }
    
        console.log(`**********Constructor Method Result Statement************`)
    }

//step-2
componentWillMount()
{
    console.log(`**********componentWillMount Method Result Statement************`)
}

//step-4
componentDidMount()
{
    console.log(`**********componentDidMount Method Result Statement************`)
}

    //step-3
    render() {

        console.log(`**********Render Method Result Statement************`)

        return (<>
            <div className="container text-center py-5">

                    <h2 className="py-2"> LifeCycle Component Methods </h2>

                    <button onClick={ ()=>this.setState({   counter: this.state.counter+1 })} className="btn btn-primary">
                        Likes <span className="badge rounded-pill bg-secondary">
                                  {this.state.counter}
                              </span>
                    </button>   

                    &nbsp;&nbsp;&nbsp;


                    <button onClick={ ()=>this.setState({   email: "Kumar@gmail.com" })} className="btn btn-primary">
                        Email: <span className="badge rounded-pill bg-secondary">
                                  {this.state.email}
                              </span>
                    </button>   


            </div>
        </>)
    }//render




shouldComponentUpdate(nextProps,nextState)
{
    console.log(`**********shouldComponentUpdate Method Result Statement************`)

    if(this.state.email==nextState.email)//''=='kumar@gmail.com'
    {
        return false//stop execution..
    }
    else
    {
        return true
    }
}

componentWillUpdate()
{
    console.log(`**********componentWillUpdate Method Result Statement************`)
}

componentDidUpdate()
{
    console.log(`**********componentDidUpdate Method Result Statement************`)
}



componentWillUnmount()
{
 console.log("***** componentwillUnmount Method Result Statement ******")
 alert("Do you want leave from Cuurent Component");
}

}//class
