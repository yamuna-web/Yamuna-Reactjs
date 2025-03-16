import { Component } from "react";

export default class DigitalForm extends Component{
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
  <label htmlFor="formGroupExampleInput" className="form-label">phone</label>
  <input type="text" className="form-control" name="phone"
                value={this.props.person.phone}
                onChange={this.props.handlechange}/>
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">address</label>
  <input type="text" className="form-control" name="address"
                value={this.props.person.address}
                onChange={this.props.handlechange}/>
</div>
            <br />
            {this.props.editindex === null ? <button type="button" onClick={this.props.adduser}>add user</button> :
                (<button type="button" onClick={this.props.updateUser}> update user</button>)}
        </form>
    </div>
}
}

