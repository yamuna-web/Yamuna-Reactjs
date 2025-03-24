import axios from "axios";
import { Component } from "react";

export default class Parent extends Component{
    constructor(){
        super();
        this.state={
            person:{
                id:"",
                Name:"",
                email:""
            },
            Etracker:[],
            editIndex:null
        };
        getEtrackerfromServer=()=>{
           axios.get("http://localhost:3000/Etracker").then((Response)=>{
            this.setState({Etracker:Response.data})
           })
        };
        handleChange=(e)=>{
            var newuser={...this.state.person}
            newuser[e.target.name]=e.target.value
            this.setState({person:newuser})
        };
        addUser=()=>{
            axios.post("http://localhost:3000/Etracker",this.state.person).then(()=>{
               this. getEtrackerfromServer()
               this.clearform()

            })
        };
        deleatUser=()=>{
            axios.delete("http://localhost:3000/Etracker"+ value.id).then(()=>{
                  this.clearform()
            })
        };
        editUser=()=>{};
        UpdateUser=()=>{};
        
    };
    render(){
        return <div>

        </div>
    }
}