import axios from "axios";
import { Component } from "react";

export default class SocilaMedia extends Component{
    constructor(){
        super();
        this.state={
             person:{
                id:"",
                content:"",
                likes:"",
                comments:"",
                author:"",
             },
             socialmedia:[],
             editindex:null
        }
    };
    getsocialmediaFromServer=()=>{
      axios.get("http://localhost:3000//socialmedia").then((response)=>{
        this.setState({socialmedia:response.data})
      })
    }
    handlechange = (e) => {
        var newusr = { ...this.state.person }
        newusr[e.target.name] = e.target.value
        this.setState({ person: newusr })
    }
    adduser = () => {
        axios.post("http://localhost:3000//socialmedia", this.state.person).then(() => {
            this.getsocialmediaFromServer()
            this.clearForm()
        })
    }

    deletetuser = (val) => {
        axios.delete("http://localhost:3000//socialmedia/" + val.id).then(() => {
            this.getsocialmediaFromServer()
        })

    }
    edituser = (val, i) => {
        this.setState({ person: val, editindex: i });
    }
    updateUser = () => {
        axios.put("http://localhost:3000//socialmedia/" + this.state.socialmedia[this.state.editindex].id, this.state.person)
            .then(() => {
                this.getsocialmediaFromServer();
                this.setState({ editindex: null });
                this.clearForm();
            })
    }
    clearForm = () => {
        this.setState({
            person: {
                id:"",
                content:"",
                likes:"",
                comments:"",
                author:"",
            }
        })}
    render(){
        return <div>
            <form>
            <label htmlFor="">id</label>
            <input type="text"
                name="id"
                value={this.state.person.id}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">content</label>
            <input type="text"
                name="content"
                value={this.state.person.content}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">likes</label>
            <input type="text"
                name="likes"
                value={this.state.person.likes}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">comments</label>
            <input type="text"
                name="comments"
                value={this.state.person.comments}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">author</label>
            <input type="text"
                name="author"
                value={this.state.person.author}
                onChange={this.handlechange} />{""}
            <br />
            {this.state.editindex === null ? <button type="button" onClick={this.adduser}>add user</button> :
                (<button type="button" onClick={this.updateUser}> update user</button>)}
            </form>
            <hr />
            <table border={2}>
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
              {this.state.socialmedia.map((val, i) => {
                    return (<tr key={i}>
                        <td>{val.id}</td>
                        <td>{val.content}</td>
                        <td>{val.likes}</td>
                        <td>{val.comments}</td>
                        <td>{val.author}</td>
                        <td><button type="button" onClick={() => this.edituser(val, i)}>edit</button></td>
                        <td><button type="button" onClick={() => this.deletetuser(val)}>delete</button></td>
                    </tr>)
                })}

              </tbody>
            </table>
        </div>
    }
    componentDidMount(){
       this.getsocialmediaFromServer();
    }
};
