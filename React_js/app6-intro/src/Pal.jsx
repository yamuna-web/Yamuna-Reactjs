import { Component } from "react";
import Bavkl from "./Bavkl";

class Pal extends Component{
    constructor(){
        super()
        this.state={
            fname:"yamuna",
        }
    }
    render(){
        return <div>
          <Bavkl all={this.state}/> 
        </div>
    }
}
export default Pal;