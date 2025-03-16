import { Component } from "react";

export default class SocialTable extends Component{
    constructor(){
        super()
    };
render(){
    return <div>
        <table border={1}>
            <thead>
            <tr>
            <th>Unique Post ID</th>
                    <th>Post Text</th>
                    <th>Number of Likes</th>
                    <th>status</th>
                    <th>Array of Comments</th>
                    <th>Post Author</th>
                    <th>Edit</th>
                    <th>Deleat</th>
                </tr>
            </thead>
            <tbody>
                {this.props.Social.map((val, i) => {
                    return (<tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.content}</td>
                        <td>{val.likes}</td>
                        <td>{val.comments}</td>
                        <td>{val.author}</td>
                        <td><button type="button" onClick={() => this.props.edituser(val, i)}>edit</button></td>
                        <td><button type="button" onClick={() => this.props.deleteuser(val)}>delete</button></td>
                    </tr>)
                })}

            </tbody>
        </table>
    </div>
}
}