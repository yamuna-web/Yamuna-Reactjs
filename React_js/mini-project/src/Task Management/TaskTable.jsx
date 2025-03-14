import { Component } from "react";

export default class TaskTable extends Component{
    constructor(){
        super()
    }
    render(){
        return <div>
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
                {this.props.system.map((val, i) => {
                    return (<tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.title}</td>
                        <td>{val.description}</td>
                        <td>{val.status}</td>
                        <td>{val.createdAt}</td>
                        <td><button type="button" onClick={() => this.props.edituser(val, i)}>edit</button></td>
                        <td><button type="button" onClick={() => this.props.deletetuser(val)}>delete</button></td>
                    </tr>)
                })}

            </tbody>
        </table>
        </div>
    }
}