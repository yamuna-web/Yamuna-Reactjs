import { Children, Component } from "react";
import Child from "./Child";

export class Parent extends Component {
    constructor() {
        super();
        this.state = {
            parent: {
                fname: "yemmu",
                lname: "neeru",
                email: "yemmu@gmail.com"
            },
            users:["krishna","ravireddy","krish"],
        }

    }
    handleobjectChanges = () => {
        this.setState({
            parent: {
                fname: "savithri",
                lname: "chenchaiah",
                email: "yemmu@gmail.com"
            },
        })
    }

    render() {
        return <div>
            <h2>Welcome to Parent Child</h2>
            <button onClick={this.handleobjectChanges}>change object details</button>
            <ul>
                <li>{this.state.parent.fname}</li>
                <li>{this.state.parent.lname}</li>
                <li>{this.state.parent.email}</li>
                <hr />

            </ul>
            <Child allUsers={this.state.users}/>
        </div>
    }
}

