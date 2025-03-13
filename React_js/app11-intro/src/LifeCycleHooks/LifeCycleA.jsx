import { Component } from "react";
import { LifeCycleB } from "./LifeCycleB";

export class LifeCycleA extends Component {
    constructor(props) {
        super();
        console.log("Iam LifeCycleA from Constructor!!!")
        this.state={
            count:10
        };
    }

    static getDerivedStateFromProps(props,state) {
        console.log("Iam LifeCycleA from getDerivedStateFromProps")
        return null;
    }
    changecount=()=>{
        this.setState({count:this.state.count+1})
    }

    render() {
        console.log("Render LifeCycleA Method also is called !!!")
        return <div><h2>Welcome to Life Cycle Hook</h2>
        <button type="button" onClick={this.changecount}>changecount</button>
        {/* <LifeCycleB/> */}
        <LifeCycleB countValue = {this.state.count}/>

        </div>;
    }
    componentDidMount(){
        console.log("yes LifeCycleA componentDidMount loading is completed")
    }
}
