import { Component } from "react";
import axios from "axios"
import InventaryForm from "./InventaryForm";
import InventaryTable from "./InventaryTable";

export default class InventaryManagement extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                id: "",
                name: "",
                quantity: "",
                price: "",
                category: ""
            },
            Inventaryststem: [],
            editindex: null,
        }
    }


    getInventaryststemFromServer = () => {
        axios.get("http://localhost:3000/Inventaryststem").then((response) => {
            this.setState({ Inventaryststem: response.data })
        })

    }

    handlechange = (e) => {
        var newusr = { ...this.state.person }
        newusr[e.target.name] = e.target.value
        this.setState({ person: newusr })
    }
    adduser = () => {
        axios.post("http://localhost:3000/Inventaryststem", this.state.person).then(() => {
            this.getInventaryststemFromServer()
            this.clearForm()
        })
    }

    deletetuser = (val) => {
        axios.delete("http://localhost:3000/Inventaryststem/" + val.id).then(() => {
            this.getInventaryststemFromServer()
        })

    }
    edituser = (val, i) => {
        this.setState({ person: val, editindex: i });
    }
    updateUser = () => {
        axios.put("http://localhost:3000/Inventaryststem/" + this.state.Inventaryststem[this.state.editindex].id, this.state.person)
            .then(() => {
                this.getInventaryststemFromServer();
                this.setState({ editindex: null });
                this.clearForm();
            })
    }
clearForm = () => {
    this.setState({
        person: {
            id: "",
            name: "",
            quantity: "",
            price: "",
            category: ""
        },
    })}
render() {
    return <div>
        <InventaryForm person={this.state.person}
                               adduser={this.adduser}
                               handlechange={this.handlechange}
                              updateUser={this.updateUser}
                              editindex={this.state.editindex}/>
        <hr />
               <InventaryTable Inventaryststem={this.state.Inventaryststem} edituser={this.edituser} deletetuser={this.deletetuser}/>
       
    </div>
}
componentDidMount() {
    this.getInventaryststemFromServer();
}
}