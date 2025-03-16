import { Component } from "react";

export default class MovieForm extends Component{
constructor(){
    super()
};
render(){
    return <div>
            <form >
            <div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">seatNumberr</label>
  <input type="text" className="form-control" name="seatNumberr"
                value={this.props.person.seatNumberr}
                onChange={this.props.handlechange}/>
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">isBooked</label>
  <input type="text" className="form-control" name="isBooked"
                value={this.props.person.isBooked}
                onChange={this.props.handlechange}/>
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">category</label>
  <input type="text" className="form-control" name="category"
                value={this.props.person.category}
                onChange={this.props.handlechange}/>
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">userID</label>
  <input type="text" className="form-control" name="userID"
                value={this.props.person.userID}
                onChange={this.props.handlechange}/>
</div>
            <br />
            {this.props.editindex === null ? <button type="button" onClick={this.props.adduser}>add user</button> :
                (<button type="button" onClick={this.props.updateUser}> update user</button>)}
        </form>
    </div>
}
}

