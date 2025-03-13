import { Component } from "react";

export default class Child extends Component{
    render(){
       return <ul>
            {this.props.allUsers.map(function (usr,i){
               return <li key={i}>{usr}</li>
            })}
        </ul>
    }
}