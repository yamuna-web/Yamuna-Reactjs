import { Component } from "react";


export class LifeCycleB extends Component{
    constructor(){
        super();
        this.state={}
        console.log("LifeCycleB constructor claaed!!!")
    }
    static getDerivedStateFromProps(){
        console.log("LifeCycleB getDerivedStateFromProps claaed!!!")

        return{}
    };
    shouldComponentUpdate(){
        console.log("LifeCycleB shouldComponentUpdate claaed!!!")
              return true
    }
    render(){
        console.log("LifeCycleB render claaed!!!")

        return <h2>{this.props.countValue}
        </h2>
    }
    getSnapshotBeforeUpdate(){
        console.log("LifeCycleB getSnapshotBeforeUpdate claaed!!!")
        return true

    }
    componentDidUpdate(){
        console.log("LifeCycleB componentDidUpdate claaed!!!")

    }
  
}