import { Component } from "react";

export default class Yamuna extends Component{
    constructor(){
        super();
        this.state={
            student:{
                name:"",
                email:"",
                contact:""
            }
        };


    }
    handleChange=()=>{
           
    }
    render(){
        return <div>
            <form>
                <label htmlFor="">Student Name</label>
                <input type="text" name="name" value={this.state.student.name} onChange={this.handleChange}/>
                <label htmlFor="">Student Email</label>
                <input type="text" name="email" value={this.state.student.email} onChange={this.handleChange}/>
                <label htmlFor="">Contact</label>
                <input type="text" name="contact" value={this.state.student.contact} onChange={this.handleChange}/>
            </form>
        </div>
    }

}