import { Component } from "react";

export default class Child2 extends Component{
constructor(){
    super()
};
render(){
    return <div>
            <form >
            <label htmlFor="">id</label>
            <input type="text"
                name="id"
                value={this.props.person.id}
                onChange={this.props.handlechange} />{""}
            <br />
            <label htmlFor="">question:</label>
            <input type="text"
                name="question"
                value={this.props.person.question}
                onChange={this.props.divhandlechange} />{""}
            <br />
            <label htmlFor="">options:</label>
            <input type="text"
                name="options"
                value={this.props.person.options}
                onChange={this.props.handlechange} />{""}
            <br />
            <label htmlFor="">correctAnswer</label>
            <input type="text"
                name="correctAnswer"
                value={this.props.person.correctAnswer}
                onChange={this.props.handlechange} />{""}
            <br />
            <label htmlFor="">score:</label>
            <input type="text"
                name="totalprice"
                value={this.props.person.totalprice}
                onChange={this.props.handlechange} />

            <br />
            {this.props.editindex === null ? <button type="button" onClick={this.props.adduser}>add user</button> :
                (<button type="button" onClick={this.props.updateUser}> update user</button>)}
        </form>
    </div>
}
}

