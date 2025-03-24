import React, { Component } from "react";

const Hocd =(ClickComponent)=>{
class Newrc extends Component{
constructor(props){
    super(props)
    this.state={
        count:0,
    }
};
increment=()=>{
this.setState({count:this.state.count+1})
};
decrement=()=>{
    this.setState({count:this.state.count-1})
};
reset=()=>{
    this.setState({count:0})
}
render(){
    
    return(
        <ClickComponent
        count={this.state.count}
        increment={this.increment}
        decrement={this.decrement}
        reset={this.reset}
        />
    )
}
}
return Newrc;
}
export default Hocd