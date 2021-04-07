import React,{Component} from 'react';


class Eventhan extends Component{


    handleClick= ()=>{                           //it is also binding 
        console.log("EventHandlng Good", this);
    }
    render(){
        return(
            <>
            <h1>Event Handling Practice</h1>
            <button onClick={this.handleClick}>click me</button>

            </>
        )
    }
}
export default Eventhan;