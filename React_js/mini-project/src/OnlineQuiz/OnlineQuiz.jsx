import { Component } from "react";
import axios from "axios"

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
        <form >
            <label htmlFor="">id</label>
            <input type="text"
                name="id"
                value={this.state.person.id}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">question:</label>
            <input type="text"
                name="question"
                value={this.state.person.question}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">options:</label>
            <input type="text"
                name="options"
                value={this.state.person.options}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">correctAnswer</label>
            <input type="text"
                name="correctAnswer"
                value={this.state.person.correctAnswer}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">score:</label>
            <input type="text"
                name="totalprice"
                value={this.state.person.totalprice}
                onChange={this.handlechange} />

            <br />
            {this.state.editindex === null ? <button type="button" onClick={this.adduser}>add user</button> :
                (<button type="button" onClick={this.updateUser}> update user</button>)}
        </form>
        <hr />
        <table border={1}>
            <thead>
                <tr>
                    <th>Question ID</th>
                    <th>Question Text</th>
                    <th>Array of Answer Choices</th>
                    <th>Correct Answer</th>
                    <th>Points per Question</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {this.state.Appquiz.map((val, i) => {
                    return (<tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.question}</td>
                        <td>{val.options}</td>
                        <td>{val.correctAnswer}</td>
                        <td>{val.score}</td>
                        <td><button type="button" onClick={() => this.edituser(val, i)}>edit</button></td>
                        <td><button type="button" onClick={() => this.deletetuser(val)}>delete</button></td>
                    </tr>)
                })}

            </tbody>
        </table>
    </div>
}
componentDidMount() {
    this.getAppquizFromServer();
}
}