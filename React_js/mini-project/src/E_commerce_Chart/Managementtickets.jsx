import { Component } from "react";
import axios from "axios"
import EcartForm from "./EcartForm";
import EcartTable from "./EcartTable";

export default class Ecommerse extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                id: "",
                name: "",
                price: "",
                quantity: "",
                totalprice: ""
            },
            Ecart: [],
            editindex: null,
        }
    }


    getEcartFromServer = () => {
        axios.get("http://localhost:3000/Ecart").then((response) => {
            this.setState({ Ecart: response.data })
        })

    }

    handlechange = (e) => {
        var newusr = { ...this.state.person }
        newusr[e.target.name] = e.target.value
        this.setState({ person: newusr })
    }
    adduser = () => {
        axios.post("http://localhost:3000/Ecart", this.state.person).then(() => {
            this.getEcartFromServer()
            this.clearForm()
        })
    }

    deletetuser = (val) => {
        axios.delete("http://localhost:3000/Ecart/" + val.id).then(() => {
            this.getEcartFromServer()
        })

    }
    edituser = (val, i) => {
        this.setState({ person: val, editindex: i });
    }
    updateUser = () => {
        axios.put("http://localhost:3000/Ecart/" + this.state.Ecart[this.state.editindex].id, this.state.person)
            .then(() => {
                this.getEcartFromServer();
                this.setState({ editindex: null });
                this.clearForm();
            })
    }
clearForm = () => {
    this.setState({
        person: {
            id: "",
            name: "",
            price: "",
            quantity: "",
            totalprice: ""
        }
    })}
render() {
    return <div>
        <EcartForm person={this.state.person}
                               adduser={this.adduser}
                               handlechange={this.handlechange}
                              updateUser={this.updateUser}
                              editindex={this.state.editindex}/>
        <hr />
        <EcartTable Ecart={this.state.Ecart} edituser={this.edituser} deletetuser={this.deletetuser}/>

    </div>
}
componentDidMount() {
    this.getEcartFromServer();
}
}