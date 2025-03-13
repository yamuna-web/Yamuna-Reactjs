import { Component } from "react";
import axios from "axios"

export default class ExpenseTracker extends Component {
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
        <form >
            <label htmlFor="">id</label>
            <input type="text"
                name="id"
                value={this.state.person.id}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">amount:</label>
            <input type="text"
                name="amount"
                value={this.state.person.amount}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">category:</label>
            <input type="text"
                name="category"
                value={this.state.person.category}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">description</label>
            <input type="text"
                name="description"
                value={this.state.person.description}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">date:</label>
            <input type="text"
                name="date"
                value={this.state.person.date}
                onChange={this.handlechange} />

            <br />
            {this.state.editindex === null ? <button type="button" onClick={this.adduser}>add user</button> :
                (<button type="button" onClick={this.updateUser}> update user</button>)}
        </form>
        <hr />
        <table border={1}>
            <thead>
                <tr>
                    <th>Expense ID</th>
                    <th>Expense Amount</th>
                    <th>Expense Type</th>
                    <th>Details of Expense</th>
                    <th>Expense Date</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {this.state.Etracker.map((val, i) => {
                    return (<tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.amount}</td>
                        <td>{val.category}</td>
                        <td>{val.description}</td>
                        <td>{val.date}</td>
                        <td><button type="button" onClick={() => this.edituser(val, i)}>edit</button></td>
                        <td><button type="button" onClick={() => this.deletetuser(val)}>delete</button></td>
                    </tr>)
                })}

            </tbody>
        </table>
    </div>
}
componentDidMount() {
    this.getEtrackerFromServer();
}
}