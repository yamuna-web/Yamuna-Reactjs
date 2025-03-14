import { Component } from "react";
import axios from "axios"
import Child1 from "./OnlineTable";
import Child2 from "./OnlineForm";
import OnlineForm from "./OnlineForm";
import OnlineTable from "./OnlineTable";

export default class OnlineQuiz extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                id: "",
                question: "",
                options: "",
                correctAnswer: "",
                score: ""
            },
            Appquiz: [],
            editindex: null,
        }
    }


    getAppquizFromServer = () => {
        axios.get("http://localhost:3000/Appquiz").then((response) => {
            this.setState({ Appquiz: response.data })
        })

    }

    handlechange = (e) => {
        var newusr = { ...this.state.person }
        newusr[e.target.name] = e.target.value
        this.setState({ person: newusr })
    }
    adduser = () => {
        axios.post("http://localhost:3000/Appquiz", this.state.person).then(() => {
            this.getAppquizFromServer()
            this.clearForm()
        })
    }

    deletetuser = (val) => {
        axios.delete("http://localhost:3000/Appquiz/" + val.id).then(() => {
            this.getAppquizFromServer()
        })

    }
    edituser = (val, i) => {
        this.setState({ person: val, editindex: i });
    }
    updateUser = () => {
        axios.put("http://localhost:3000/Appquiz/" + this.state.Appquiz[this.state.editindex].id, this.state.person)
            .then(() => {
                this.getAppquizFromServer();
                this.setState({ editindex: null });
                this.clearForm();
            })
    }
clearForm = () => {
    this.setState({
        person: {
            id: "",
            question: "",
            options: "",
            correctAnswer: "",
            score: ""
        },
    })}
render() {
    return <div>
        <OnlineForm person={this.state.person}
       adduser={this.adduser}
       handlechange={this.handlechange}
      updateUser={this.updateUser}
      editindex={this.state.editindex}/>
        
        <hr />
        
        <OnlineTable Appquiz={this.state.Appquiz} edituser={this.edituser} deletetuser={this.deletetuser}
        />
    </div>
}
componentDidMount() {
    this.getAppquizFromServer();
}
}