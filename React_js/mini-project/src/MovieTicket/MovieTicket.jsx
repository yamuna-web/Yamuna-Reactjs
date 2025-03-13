import { Component } from "react";
import axios from "axios"

export default class MovieTicket extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                seatNumber: "",
                isBooked: "",
                category: "",
                userID: "",
               
            },
            Bookingsystem: [],
            editindex: null,
        }
    }


    getBookingsystemFromServer = () => {
        axios.get("http://localhost:3000/Bookingsystem").then((response) => {
            this.setState({ Bookingsystem: response.data })
        })

    }

    handlechange = (e) => {
        var newusr = { ...this.state.person }
        newusr[e.target.name] = e.target.value
        this.setState({ person: newusr })
    }
    adduser = () => {
        axios.post("http://localhost:3000/Bookingsystem", this.state.person).then(() => {
            this.getBookingsystemFromServer()
            this.clearForm()
        })
    }

    deletetuser = (val) => {
        axios.delete("http://localhost:3000/Bookingsystem/" + val.id).then(() => {
            this.getBookingsystemFromServer()
        })

    }
    edituser = (val, i) => {
        this.setState({ person: val, editindex: i });
    }
    updateUser = () => {
        axios.put("http://localhost:3000/Bookingsystem/" + this.state.Bookingsystem[this.state.editindex].id, this.state.person)
            .then(() => {
                this.getBookingsystemFromServer();
                this.setState({ editindex: null });
                this.clearForm();
            })
    }
clearForm = () => {
    this.setState({
        person: {
            seatNumber: "",
            isBooked: "",
            category: "",
            userID: "",
           
        },
    })}
render() {
    return <div>
        <form >
            <label htmlFor="">seatNumber</label>
            <input type="text"
                name="seatNumber"
                value={this.state.person.seatNumber}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">isBooked:</label>
            <input type="text"
                name="isBooked"
                value={this.state.person.isBooked}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">category:</label>
            <input type="text"
                name="category"
                value={this.state.person.category}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">userID</label>
            <input type="text"
                name="userID"
                value={this.state.person.userID}
                onChange={this.handlechange} />{""}
            <br />
            {this.state.editindex === null ? <button type="button" onClick={this.adduser}>add user</button> :
                (<button type="button" onClick={this.updateUser}> update user</button>)}
        </form>
        <hr />
        <table border={1}>
            <thead>
                <tr>
                    <th>Seat Identifier</th>
                    <th>Seat Status</th>
                    <th>VIP, Regular, Economy</th>
                    <th>Booked By User ID</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {this.state.Bookingsystem.map((val, i) => {
                    return (<tr key={val.id}>
                        <td>{val.seatNumber}</td>
                        <td>{val.isBooked}</td>
                        <td>{val.category}</td>
                        <td>{val.userID}</td>
                        <td><button type="button" onClick={() => this.edituser(val, i)}>edit</button></td>
                        <td><button type="button" onClick={() => this.deletetuser(val)}>delete</button></td>
                    </tr>)
                })}

            </tbody>
        </table>
    </div>
}
componentDidMount() {
    this.getBookingsystemFromServer();
}
}