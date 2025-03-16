import { Component } from "react";

export default class MovieTable extends Component{
    constructor(){
        super()
    };
render(){
    return <div>
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
                {this.props.Bookingsystem.map((val, i) => {
                    return (<tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.seatNumber}</td>
                        <td>{val.isBooked}</td>
                        <td>{val.category}</td>
                        <td>{val.userID}</td>
                        <td><button type="button" onClick={() => this.props.edituser(val, i)}>edit</button></td>
                        <td><button type="button" onClick={() => this.props.deletetuser(val)}>delete</button></td>
                    </tr>)
                })}

            </tbody>
        </table>
    </div>
}
}