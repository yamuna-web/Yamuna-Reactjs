import { Component } from "react";

export default class OnlineTable extends Component{
    constructor(){
        super()
    };
render(){
    return <div>
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
                {this.props.Appquiz.map((val, i) => {
                    return (<tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.question}</td>
                        <td>{val.options}</td>
                        <td>{val.correctAnswer}</td>
                        <td>{val.score}</td>
                        <td><button type="button" onClick={() => this.props.edituser(val, i)}>edit</button></td>
                        <td><button type="button" onClick={() => this.props.deletetuser(val)}>delete</button></td>
                    </tr>)
                })}

            </tbody>
        </table>
    </div>
}
}