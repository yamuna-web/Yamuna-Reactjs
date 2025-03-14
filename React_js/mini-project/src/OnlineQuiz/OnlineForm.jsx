import { Component } from "react";

export default class OnlineForm extends Component{
constructor(){
    super()
};
render(){
    return <div>
            <form >
            <div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">id</label>
  <input type="text" className="form-control" name="createdAt"
                value={this.props.person.createdAt}
                onChange={this.props.handlechange}/>
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">question</label>
  <input type="text" className="form-control" name="createdAt"
                value={this.props.person.createdAt}
                onChange={this.props.handlechange}/>
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">options</label>
  <input type="text" className="form-control" name="createdAt"
                value={this.props.person.createdAt}
                onChange={this.props.handlechange}/>
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">correctAnswer</label>
  <input type="text" className="form-control" name="createdAt"
                value={this.props.person.createdAt}
                onChange={this.props.handlechange}/>
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">score</label>
  <input type="text" className="form-control" name="createdAt"
                value={this.props.person.createdAt}
                onChange={this.props.handlechange}/>
</div>
            <br />
            {this.props.editindex === null ? <button type="button" onClick={this.props.adduser}>add user</button> :
                (<button type="button" onClick={this.props.updateUser}> update user</button>)}
        </form>
    </div>
}
}

