import { Component } from "react";
import axios from "axios"
import TaskForm from "./TaskForm";
import TaskTable from "./TaskTable";

export default class TaskManagement extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                id: "",
                title: "",
                description: "",
                status: "",
                createdAt: ""
            },
            system: [],
            editindex: null,
        }
    }


    getsystemFromServer = () => {
        axios.get("http://localhost:3000/system").then((response) => {
            this.setState({ system: response.data })
        })

    }

    handlechange = (e) => {
        var newusr = { ...this.state.person }
        newusr[e.target.name] = e.target.value
        this.setState({ person: newusr })
    }
    adduser = () => {
        axios.post("http://localhost:3000/system", this.state.person).then(() => {
            this.getsystemFromServer()
            this.clearForm()
        })
    }

    deletetuser = (val) => {
        axios.delete("http://localhost:3000/system/" + val.id).then(() => {
            this.getsystemFromServer()
        })

    }
    edituser = (val, i) => {
        this.setState({ person: val, editindex: i });
    }
    updateUser = () => {
        axios.put("http://localhost:3000/system/" + this.state.system[this.state.editindex].id, this.state.person)
            .then(() => {
                this.getsystemFromServer();
                this.setState({ editindex: null });
                this.clearForm();
            })
    }
clearForm = () => {
    this.setState({
        person: {
            id: "",
            title: "",
            description: "",
            status: "",
            createdAt: ""
        },
    })}
render() {
    return <div>
       <TaskForm person={this.state.person}
       adduser={this.adduser}
       handlechange={this.handlechange}
      updateUser={this.updateUser}
      editindex={this.state.editindex}/>
        <hr />
       <TaskTable system={this.state.system} edituser={this.edituser} deletetuser={this.deletetuser}/>
    </div>
}
componentDidMount() {
    this.getsystemFromServer();
}
}