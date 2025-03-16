import { Component } from "react";
import axios from "axios"
import DigitalForm from "./DigitalForm";
import DigitalTable from "./DigitalTable";

export default class DigitalAdress extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                id: "",
                name: "",
                email: "",
                phone: "",
                address: ""
            },
            AdressBook: [],
            editindex: null,
        }
    }


    getAdressBookFromServer = () => {
        axios.get("http://localhost:3000/AdressBook").then((response) => {
            this.setState({ AdressBook: response.data })
        })

    }

    handlechange = (e) => {
        var newusr = { ...this.state.person }
        newusr[e.target.name] = e.target.value
        this.setState({ person: newusr })
    }
    adduser = () => {
        axios.post("http://localhost:3000/AdressBook", this.state.person).then(() => {
            this.getAdressBookFromServer()
            this.clearForm()
        })
    }

    deletetuser = (val) => {
        axios.delete("http://localhost:3000/AdressBook/" + val.id).then(() => {
            this.getAdressBookFromServer()
        })

    }
    edituser = (val, i) => {
        this.setState({ person: val, editindex: i });
    }
    updateUser = () => {
        axios.put("http://localhost:3000/AdressBook/" + this.state.AdressBook[this.state.editindex].id, this.state.person)
            .then(() => {
                this.getAdressBookFromServer();
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
            phone: "",
            address: ""
        },
    })}
render() {
    return <div>
       <DigitalForm person={this.state.person}
                              adduser={this.adduser}
                              handlechange={this.handlechange}
                             updateUser={this.updateUser}
                             editindex={this.state.editindex}/>
        <hr />
        <DigitalTable AdressBook={this.state.AdressBook} edituser={this.edituser} deletetuser={this.deletetuser}/>

    </div>
}
componentDidMount() {
    this.getAdressBookFromServer();
}
}