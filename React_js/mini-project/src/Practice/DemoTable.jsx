import { Component } from "react";

export default class DemoTable extends Component{
    constructor(){
        super()
    };
render(){
    return <div>
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
                {this.props.Etracker.map((val, i) => {
                    return (<tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.amount}</td>
                        <td>{val.category}</td>
                        <td>{val.description}</td>
                        <td>{val.date}</td>
                        <td><button type="button" onClick={() => this.props.edituser(val, i)}>edit</button></td>
                        <td><button type="button" onClick={() => this.props.deletetuser(val)}>delete</button></td>
                    </tr>)
                })}

            </tbody>
        </table>
    </div>
}
}