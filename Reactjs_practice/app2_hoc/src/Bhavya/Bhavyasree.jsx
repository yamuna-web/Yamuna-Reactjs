import { Component } from "react";

const Bhavyasree=(Clickbhavi)=>{
class Newcomponent extends Component{
constructor(){
    super()
    this.state={
        count:0
    }
}
increment=()=>{
    this.setState({count:this.state.count+1})
}
decrement=()=>{
    this.setState({count:this.state.count-1})
}
reset=()=>{
    this.setState({count:0})
}
render(){
    const{increment,decrement,reset}=this
    return <div>
        <Clickbhavi
        count={this.state.count}
        increment={increment}
        decrement={decrement}
        reset={reset}
        
        />
    </div>
}
}
return Newcomponent
}
export default Bhavyasree