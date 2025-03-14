import { Component } from "react";
import axios from "axios"
import Child1 from "./child1";
import Child2 from "./Child2";

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
        
        
        <hr />
        <Child2/>
        <Child1 Appquiz={this.state.Appquiz}/>
    </div>
}
componentDidMount() {
    this.getAppquizFromServer();
}
}