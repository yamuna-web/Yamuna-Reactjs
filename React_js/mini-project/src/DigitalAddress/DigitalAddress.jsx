import { Component } from "react";
import axios from "axios"

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
        <form >
            <label htmlFor="">id</label>
            <input type="text"
                name="id"
                value={this.state.person.id}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">name:</label>
            <input type="text"
                name="name"
                value={this.state.person.name}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">email:</label>
            <input type="text"
                name="email"
                value={this.state.person.email}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">phone</label>
            <input type="text"
                name="phone"
                value={this.state.person.phone}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">address:</label>
            <input type="text"
                name="address"
                value={this.state.person.address}
                onChange={this.handlechange} />

            <br />
            {this.state.editindex === null ? <button type="button" onClick={this.adduser}>add user</button> :
                (<button type="button" onClick={this.updateUser}> update user</button>)}
        </form>
        <hr />
        <table border={1}>
            <thead>
                <tr>
                    <th>Contact ID</th>
                    <th>Contact Name</th>
                    <th>Email Address</th>
                    <th>Phone Number</th>
                    <th>Physical Address</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {this.state.AdressBook.map((val, i) => {
                    return (<tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.email}</td>
                        <td>{val.phone}</td>
                        <td>{val.address}</td>
                        <td><button type="button" onClick={() => this.edituser(val, i)}>edit</button></td>
                        <td><button type="button" onClick={() => this.deletetuser(val)}>delete</button></td>
                    </tr>)
                })}

            </tbody>
        </table>
    </div>
}
componentDidMount() {
    this.getAdressBookFromServer();
}
}