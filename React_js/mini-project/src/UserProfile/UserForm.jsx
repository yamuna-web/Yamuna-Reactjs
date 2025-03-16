import { Component } from "react";

export default class UserForm extends Component{
constructor(){
    super()
};
render(){
    return <div>
            <form >
            <div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">id</label>
  <input type="text" className="form-control" name="id"
                value={this.props.person.id}
                onChange={this.props.handlechange}/>
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">name</label>
  <input type="text" className="form-control" name="name"
                value={this.props.person.name}
                onChange={this.props.handlechange}/>
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">email</label>
  <input type="text" className="form-control" name="email"
                value={this.props.person.email}
                onChange={this.props.handlechange}/>
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">role</label>
  <input type="text" className="form-control" name="role"
                value={this.props.person.role}
                onChange={this.props.handlechange}/>
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">preferences</label>
  <input type="text" className="form-control" name="preferences"
                value={this.props.person.preferences}
                onChange={this.props.handlechange}/>
</div>
            <br />
            {this.props.editindex === null ? <button type="button" onClick={this.props.adduser}>add user</button> :
                (<button type="button" onClick={this.props.updateUser}> update user</button>)}
        </form>
    </div>
}
}

