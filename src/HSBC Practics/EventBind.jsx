import React, {Component} from "react";

class EventBind extends Component{

    constructor(){
        super();
        this.state ={
            message:"Hello"
        }
        this.bindEvent=this.bindEvent.bind(this)
    }

    bindEvent(){
        this.setState({
            message:"Bye"
        })
        console.log(this)
    }
    render(){
        return(
            <>
            <h1>{this.state.message}</h1>
            {/* <button onClick={this.bindEvent.bind(this)}>Click Me</button> */}
            {/* <button onClick={()=>this.bindEvent()}>Click Me</button> */}
            <button onClick={this.bindEvent}>Click Me</button>



        
            </>
        )
    }
}

export default EventBind;