import { Component } from "react"

export default class TaskForm extends Component{
constructor(){
    super()
}
render(){
    return <div>
        <div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">id</label>
  <input type="text" className="form-control"  name="id"
                value={this.props.person.id}
                onChange={this.props.handlechange}/>
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput2" className="form-label">title</label>
  <input type="text" className="form-control" name="title"
                value={this.props.person.title}
                onChange={this.props.handlechange}/>
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">description</label>
  <input type="text" className="form-control"  name="description"
                value={this.props.person.description}
                onChange={this.props.handlechange}/>
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">status</label>
  <input type="text" className="form-control" name="status"
                value={this.props.person.status}
                onChange={this.props.handlechange}/>
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">createdAt</label>
  <input type="text" className="form-control" name="createdAt"
                value={this.props.person.createdAt}
                onChange={this.props.handlechange}/>
</div>
{this.props.editindex === null ? <button type="button" onClick={this.props.adduser}>add user</button> :
                (<button type="button" onClick={this.props.updateUser}> update user</button>)}
    </div>
}
}