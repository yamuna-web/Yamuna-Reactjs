import { Component } from "react";

export default class ChildForm extends Component{
    constructor(){
        super();

    };
    render(){
        return <div>
            <form>
            <div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">id</label>
  <input type="text" className="form-control" name="id"
                value={this.props.person.id}
                onChange={this.props.handlechange}/>
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
  <input type="text" className="form-control" name="Name"
                value={this.props.person.Name}
                onChange={this.props.handlechange}/>
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">email</label>
  <input type="text" className="form-control" name="email"
                value={this.props.person.email}
                onChange={this.props.handlechange}/>
</div>

            </form>
            {this.props.editIndex === null ?<button type="button" onChange={this.props.addUser}>add user</button>:
           ( <button type="button" onChange={this.props.UpdateUser}>Update User</button>)}
        </div>
     
    }
}