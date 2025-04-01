import React, { Component } from "react";


const Main=(Clickcom)=>{
    class New extends Component{
        constructor(props){
        super(props);
        this.state={
            count:2
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
        };
        render() {
            
                return(
                    <>
            <Clickcom
            count={this.state.count}
            increment={this.increment}
            decrement={this.decrement}
            reset={this.reset}
            />
                    </>
                )
            
        }
       
        }
        return New
}
export default Main
