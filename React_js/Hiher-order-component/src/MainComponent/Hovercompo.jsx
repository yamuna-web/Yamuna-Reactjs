import { Component } from "react";
import Main from "./Main";

class Hovercompo extends Component{
    render(){
        return (<>
              <h2>{this.props.count}</h2>
              <button onMouseOver={this.props.increment}>increment</button>
              <button onMouseOver={this.props.decrement}>decrement</button>
              <button onMouseOver={this.props.reset}>reset</button>
            </>)
    }
}

export default Main(Hovercompo)