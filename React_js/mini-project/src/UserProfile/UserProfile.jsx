import { Component } from "react";
import axios from "axios"

export default class UsersProfile extends Component {
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
            <label htmlFor="">role</label>
            <input type="text"
                name="role"
                value={this.state.person.role}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">preferences:</label>
            <input type="text"
                name="preferences"
                value={this.state.person.preferences}
                onChange={this.handlechange} />

            <br />
            {this.state.editindex === null ? <button type="button" onClick={this.adduser}>add user</button> :
                (<button type="button" onClick={this.updateUser}> update user</button>)}
        </form>
        <hr />
        <table border={1}>
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>User Name</th>
                    <th>User Email</th>
                    <th>Admin</th>
                    <th>User Preferences</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {this.state.Management.map((val, i) => {
                    return (<tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.email}</td>
                        <td>{val.role}</td>
                        <td>{val.preferences}</td>
                        <td><button type="button" onClick={() => this.edituser(val, i)}>edit</button></td>
                        <td><button type="button" onClick={() => this.deletetuser(val)}>delete</button></td>
                    </tr>)
                })}

            </tbody>
        </table>
    </div>
}
componentDidMount() {
    this.getManagementFromServer();
}
}