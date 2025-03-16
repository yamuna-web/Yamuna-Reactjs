import { Component } from "react";

export default class ManagementForm extends Component{
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
  <label htmlFor="formGroupExampleInput" className="form-label">title</label>
  <input type="text" className="form-control" name="title"
                value={this.props.person.title}
                onChange={this.props.handlechange}/>
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">author</label>
  <input type="text" className="form-control" name="author"
                value={this.props.person.author}
                onChange={this.props.handlechange}/>
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">isAvailable</label>
  <input type="text" className="form-control" name="isAvailable"
                value={this.props.person.isAvailable}
                onChange={this.props.handlechange}/>
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">borrower</label>
  <input type="text" className="form-control" name="borrower"
                value={this.props.person.borrower}
                onChange={this.props.handlechange}/>
</div>
            <br />
            {this.props.editindex === null ? <button type="button" onClick={this.props.adduser}>add user</button> :
                (<button type="button" onClick={this.props.updateUser}> update user</button>)}
        </form>
    </div>
}
}

