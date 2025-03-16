import { Component } from "react";
import axios from "axios"
import MovieForm from "./MovieForm";
import MovieTable from "./MovieTable";

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
        <MovieForm person={this.state.person}
               adduser={this.adduser}
               handlechange={this.handlechange}
              updateUser={this.updateUser}
              editindex={this.state.editindex}/>
        <hr />
        <MovieTable Bookingsystem={this.state.Bookingsystem} edituser={this.edituser} deletetuser={this.deletetuser}/>
                
    </div>
}
componentDidMount() {
    this.getBookingsystemFromServer();
}
}