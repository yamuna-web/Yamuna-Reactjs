import { Component } from "react";
import { Usercontextprovider } from "./Cntapi";
import Chi1 from "./Chi1";

export default class Par1 extends Component{
    constructor(){
        super()
        this.state={
            msg1:" parent",
            msg2:"iam from parent",
        }
    }
    render(){

        return(
            <div>
                <h1> Parent</h1>
                <Usercontextprovider value={this.state.msg2} >
                <Chi1   msg1={this.state.msg1}/>
                 </Usercontextprovider >
            </div>
        )
    }
}