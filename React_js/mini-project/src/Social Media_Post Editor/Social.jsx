import axios from "axios";
import { Component } from "react";
import SocialForm from "./SocialForm";
import SocialTable from "./SocialTable";

export default class Social extends Component{
    constructor(){
        super();
        this.state={
             person:{
                id:"",
                content:"",
                likes:"",
                comments:"",
                author:"",
             },
             Social:[],
             editindex:null
        }
    };
    getSocialFromServer=()=>{
      axios.get("http://localhost:3000/Social").then((response)=>{
        this.setState({Social:response.data})
      })
    }
    handlechange = (e) => {
        var newusr = { ...this.state.person }
        newusr[e.target.name] = e.target.value
        this.setState({ person: newusr })
    }
    adduser = () => {
        axios.post("http://localhost:3000/Social", this.state.person).then(() => {
            this.getSocialFromServer()
            this.clearForm()
        })
    }

    deleteuser = (val) => {
        axios.delete("http://localhost:3000/Social/" + val.id).then(() => {
            this.getSocialFromServer()
        })

    }
    edituser = (val, i) => {
        this.setState({ person: val, editindex: i });
    }
    updateUser = () => {
        axios.put("http://localhost:3000/Social/" + this.state.Social[this.state.editindex].id, this.state.person)
            .then(() => {
                this.getSocialFromServer();
                this.setState({ editindex: null });
                this.clearForm();
            })
    }
    clearForm = () => {
        this.setState({
            person: {
                id:"",
                content:"",
                likes:"",
                comments:"",
                author:"",
            }
        })}
    render(){
        return <div>
            <SocialForm person={this.state.person}
                           adduser={this.adduser}
                           handlechange={this.handlechange}
                          updateUser={this.updateUser}
                          editindex={this.state.editindex}/>
            <hr />
            <SocialTable Social={this.state.Social} edituser={this.edituser} deleteuser={this.deleteuser}/>

        </div>
    }
    componentDidMount(){
       this.getSocialFromServer();
    }
};
