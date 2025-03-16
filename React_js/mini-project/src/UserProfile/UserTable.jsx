import { Component } from "react";

export default class UserTable extends Component{
    constructor(){
        super()
    }
    render(){
        return <div>
             <table border={1}>
            <thead>
                <tr>
                <th>User ID</th>
                    <th>User Name</th>
                    <th>User Email</th>
                    <th>Admin</th>
                    <th>User Preferences</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {this.props.Management.map((val, i) => {
                    return (<tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.email}</td>
                        <td>{val.role}</td>
                        <td>{val.preferences}</td>
                        <td><button type="button" onClick={() => this.props.edituser(val, i)}>edit</button></td>
                        <td><button type="button" onClick={() => this.props.deletetuser(val)}>delete</button></td>
                    </tr>)
                })}

            </tbody>
        </table>
        </div>
    }
}