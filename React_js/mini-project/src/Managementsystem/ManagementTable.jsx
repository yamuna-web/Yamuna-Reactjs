import { Component } from "react";

export default class ManagementTable extends Component{
    constructor(){
        super()
    };
render(){
    return <div>
        <table border={1}>
            <thead>
            <tr>
                    <th>Book ID</th>
                    <th>Book Title</th>
                    <th>Book Author</th>
                    <th>Boolean - Book Status</th>
                    <th>User ID - If Borrowed</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {this.props.Librarysystem.map((val, i) => {
                    return (<tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.title}</td>
                        <td>{val.author}</td>
                        <td>{val.isAvailable}</td>
                        <td>{val.borrower}</td>
                        <td><button type="button" onClick={() => this.props.edituser(val, i)}>edit</button></td>
                        <td><button type="button" onClick={() => this.props.deletetuser(val)}>delete</button></td>
                    </tr>)
                })}

            </tbody>
        </table>
    </div>
}
}