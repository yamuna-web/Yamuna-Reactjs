import { Component } from "react";

export default class ChildTable extends Component{
    constructor(){};
    render(){
        return <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {this.props.Etracker.map((val,i)=>{
                           return (<tr key={val.i}>
                              <td>{val.id}</td>
                              <td>{val.Name}</td>
                              <td>{val.email}</td> 
                              <td><button type="button" onClick={()=>{this.props.edituser(val.i)}}>edit</button></td>  
                              <td><button type="button" onClick={()=>{this.props.deletetuser(val)}}>Deleat</button></td>               
                             </tr>)
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    }
}