import { Component } from "react";
import axios from "axios"

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
        <form >
            <label htmlFor="">id</label>
            <input type="text"
                name="id"
                value={this.state.person.id}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">title:</label>
            <input type="text"
                name="title"
                value={this.state.person.title}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">description:</label>
            <input type="text"
                name="description"
                value={this.state.person.description}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">status</label>
            <input type="text"
                name="status"
                value={this.state.person.status}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">createdAt:</label>
            <input type="text"
                name="createdAt"
                value={this.state.person.createdAt}
                onChange={this.handlechange} />

            <br />
            {this.state.editindex === null ? <button type="button" onClick={this.adduser}>add user</button> :
                (<button type="button" onClick={this.updateUser}> update user</button>)}
        </form>
        <hr />
        <table border={1}>
            <thead>
                <tr>
                    <th>Task ID</th>
                    <th>Task Title</th>
                    <th>Task Details</th>
                    <th>status</th>
                    <th>Task Creation Date</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {this.state.system.map((val, i) => {
                    return (<tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.title}</td>
                        <td>{val.description}</td>
                        <td>{val.status}</td>
                        <td>{val.createdAt}</td>
                        <td><button type="button" onClick={() => this.edituser(val, i)}>edit</button></td>
                        <td><button type="button" onClick={() => this.deletetuser(val)}>delete</button></td>
                    </tr>)
                })}

            </tbody>
        </table>
    </div>
}
componentDidMount() {
    this.getsystemFromServer();
}
}