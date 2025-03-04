import { Component } from "react";

export class Daddy extends Component{
    constructor(){
        super();
        this.state = {
            fname:"yamuna",
            email:"neeru@gmail.com",
            mobile:12334455,
        };
        
    }

    changeFirstName=()=>{
        // console.log("changeFirstName Called !!!!")
        // this.state.fname="yemmu neeru";
        this.setState({fname:"yemmu neeru",email:"yemmu@gmail.com",mobile:111111})
    };
    render(){
        return (<div>
            <h2>Welcome to Daddy component</h2>
            <button onClick={this.changeFirstName}>change First Name</button>
            <h3>{this.state.fname}</h3>
            <h3>{this.state.email}</h3>
            <h3>{this.state.mobile}</h3>
        </div>
        );  
    }
}