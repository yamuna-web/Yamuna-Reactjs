import { Component } from "react";
import axios from "axios"
import UserForm from "./UserForm";
import UserTable from "./UserTable";

export default class UserProfile extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                id: "",
                name: "",
                email: "",
                role: "",
                preferences: ""
            },
            Management: [],
            editindex: null,
        }
    }


    getManagementFromServer = () => {
        axios.get("http://localhost:3000/Management").then((response) => {
            this.setState({ Management: response.data })
        })

    }

    handlechange = (e) => {
        var newusr = { ...this.state.person }
        newusr[e.target.name] = e.target.value
        this.setState({ person: newusr })
    }
    adduser = () => {
        axios.post("http://localhost:3000/Management", this.state.person).then(() => {
            this.getManagementFromServer()
            this.clearForm()
        })
    }

    deletetuser = (val) => {
        axios.delete("http://localhost:3000/Management/" + val.id).then(() => {
            this.getManagementFromServer()
        })

    }
    edituser = (val, i) => {
        this.setState({ person: val, editindex: i });
    }
    updateUser = () => {
        axios.put("http://localhost:3000/Management/" + this.state.Management[this.state.editindex].id, this.state.person)
            .then(() => {
                this.getManagementFromServer();
                this.setState({ editindex: null });
                this.clearForm();
            })
    }
clearForm = () => {
    this.setState({
        person: {
            id: "",
            name: "",
            email: "",
            role: "",
            preferences: ""
        },
    })}
render() {
    return <div>
        <UserForm person={this.state.person}
                       adduser={this.adduser}
                       handlechange={this.handlechange}
                      updateUser={this.updateUser}
                      editindex={this.state.editindex}/>
        <hr />
        <UserTable Management={this.state.Management} edituser={this.edituser} deletetuser={this.deletetuser}/>

    </div>
}
componentDidMount() {
    this.getManagementFromServer();
}
}