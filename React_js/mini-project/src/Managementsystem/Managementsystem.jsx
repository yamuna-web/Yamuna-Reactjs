import { Component } from "react";
import axios from "axios"

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
            <label htmlFor="">author:</label>
            <input type="text"
                name="author"
                value={this.state.person.author}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">isAvailable</label>
            <input type="text"
                name="isAvailable"
                value={this.state.person.isAvailable}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">borrower:</label>
            <input type="text"
                name="borrower"
                value={this.state.person.borrower}
                onChange={this.handlechange} />

            <br />
            {this.state.editindex === null ? <button type="button" onClick={this.adduser}>add user</button> :
                (<button type="button" onClick={this.updateUser}> update user</button>)}
        </form>
        <hr />
        <table border={1}>
            <thead>
                <tr>
                    <th>Book ID</th>
                    <th>Book Title</th>
                    <th>Book Author</th>
                    <th>Boolean - Book Status</th>
                    <th>User ID - If Borrowed</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {this.state.Librarysystem.map((val, i) => {
                    return (<tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.title}</td>
                        <td>{val.author}</td>
                        <td>{val.isAvailable}</td>
                        <td>{val.borrower}</td>
                        <td><button type="button" onClick={() => this.edituser(val, i)}>edit</button></td>
                        <td><button type="button" onClick={() => this.deletetuser(val)}>delete</button></td>
                    </tr>)
                })}

            </tbody>
        </table>
    </div>
}
componentDidMount() {
    this.getLibrarysystemFromServer();
}
}