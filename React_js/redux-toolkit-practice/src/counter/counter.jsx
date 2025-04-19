import React,{ Component } from "react";
import { connect } from "react-redux";
import { decrement,increment,reset } from "./counterslice";
class counter extends Component{
 
    increment=()=>{
        this.props.dispatch(increment())
    }
    decrement=()=>{
        this.props.dispatch(decrement())
    }
    reset=()=>{
        this.props.dispatch(reset())
    }

    render(){
        console.log(this.props)
        return(<div>
            <h1>COUNTER</h1>
            <h1>{this.props.counter.count}</h1>
            <button type="button" onClick={this.increment}>increment</button>
            <button type="button" onClick={this.decrement}>decrement</button>
            <button type="button" onClick={this.reset}>reset</button>
        </div>)
    }
}
function mapsStateToProps(state){
    return state
}
export default connect(mapsStateToProps)(counter)