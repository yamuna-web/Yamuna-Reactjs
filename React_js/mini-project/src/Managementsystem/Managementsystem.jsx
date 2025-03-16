import { Component } from "react";
import axios from "axios"
import ManagementForm from "./ManagementForm";
import ManagementTable from "./ManagementTable";

export default class Managementsystem extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                id: "",
                title: "",
                author: "",
                isAvailable: "",
                borrower: ""
            },
            Librarysystem: [],
            editindex: null,
        }
    }


    getLibrarysystemFromServer = () => {
        axios.get("http://localhost:3000/Librarysystem").then((response) => {
            this.setState({ Librarysystem: response.data })
        })

    }

    handlechange = (e) => {
        var newusr = { ...this.state.person }
        newusr[e.target.name] = e.target.value
        this.setState({ person: newusr })
    }
    adduser = () => {
        axios.post("http://localhost:3000/Librarysystem", this.state.person).then(() => {
            this.getLibrarysystemFromServer()
            this.clearForm()
        })
    }

    deletetuser = (val) => {
        axios.delete("http://localhost:3000/Librarysystem/" + val.id).then(() => {
            this.getLibrarysystemFromServer()
        })

    }
    edituser = (val, i) => {
        this.setState({ person: val, editindex: i });
    }
    updateUser = () => {
        axios.put("http://localhost:3000/Librarysystem/" + this.state.Librarysystem[this.state.editindex].id, this.state.person)
            .then(() => {
                this.getLibrarysystemFromServer();
                this.setState({ editindex: null });
                this.clearForm();
            })
    }
clearForm = () => {
    this.setState({
        person: {
            id: "",
            title: "",
            author: "",
            isAvailable: "",
            borrower: ""
        },
    })}
render() {
    return <div>
        <ManagementForm person={this.state.person}
                       adduser={this.adduser}
                       handlechange={this.handlechange}
                      updateUser={this.updateUser}
                      editindex={this.state.editindex}/>
        <hr />
        <ManagementTable Librarysystem={this.state.Librarysystem} edituser={this.edituser} deletetuser={this.deletetuser}/>

    </div>
}
componentDidMount() {
    this.getLibrarysystemFromServer();
}
}