import { Component } from "react";
import axios from "axios"
import DemoForm from "./DemoForm";
import DemoTable from "./DemoTable";


export default class Demo extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                id: "",
                amount: "",
                category: "",
                description: "",
                date: ""
            },
            Etracker: [],
            editindex: null,
        }
    }


    getEtrackerFromServer = () => {
        axios.get("http://localhost:3000/Etracker").then((response) => {
            this.setState({ Etracker: response.data })
        })

    }

    handlechange = (e) => {
        var newusr = { ...this.state.person }
        newusr[e.target.name] = e.target.value
        this.setState({ person: newusr })
    }
    adduser = () => {
        axios.post("http://localhost:3000/Etracker", this.state.person).then(() => {
            this.getEtrackerFromServer()
            this.clearForm()
        })
    }

    deletetuser = (val) => {
        axios.delete("http://localhost:3000/Etracker/" + val.id).then(() => {
            this.getEtrackerFromServer()
        })

    }
    edituser = (val, i) => {
        this.setState({ person: val, editindex: i });
    }
    updateUser = () => {
        axios.put("http://localhost:3000/Etracker/" + this.state.Etracker[this.state.editindex].id, this.state.person)
            .then(() => {
                this.getEtrackerFromServer();
                this.setState({ editindex: null });
                this.clearForm();
            })
    }
clearForm = () => {
    this.setState({
        person: {
            id: "",
            amount: "",
            category: "",
            description: "",
            date: ""
        },
    })}
render() {
    return <div>
        <DemoForm  person={this.state.person}
                               adduser={this.adduser}
                               handlechange={this.handlechange}
                              updateUser={this.updateUser}
                              editindex={this.state.editindex}/>
        <hr />
                <DemoTable Etracker={this.state.Etracker} edituser={this.edituser} deletetuser={this.deletetuser}/>
        
    </div>
}
componentDidMount() {
    this.getEtrackerFromServer();
}
}