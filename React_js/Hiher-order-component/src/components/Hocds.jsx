import { Component } from "react";


const Hocds=(Click)=>{
class Newrc extends Component{
    constructor(props){
        super(props);
        this.state={
            count:2,
        }
    }
    increment=()=>{
        this.setState({count:this.state.count+2})
    };
    decrement=()=>{
        this.setState({count:this.state.count-2})
    };
    reset=()=>{
        this.setState({count:0})
    }
    render(){
        return <Click
        count={this.state.count}
        increment={this.increment}
        decrement={this.decrement}
        reset={this.reset}
        />
    }
};
return Newrc
}
export default Hocds