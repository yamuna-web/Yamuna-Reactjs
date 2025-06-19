import { Component } from "react";

const Chenchaiah=(Yamuna)=>{
    class Necomponent extends Component{
      constructor(props){
        super(props)
        this.state={
            count:0
        }
      }
increment=()=>{
    this.setState({count:this.state.count+1})
}
decrement=()=>{
    this.setState({count:this.state.count-1})
}
reset=()=>{
    this.setState({count:0})
}
      render(){
        const{increment,decrement,reset}=this
        return <div>
            <Yamuna
            count={this.state.count}
            increment={increment}
            decrement={decrement}
            reset={reset}
            
            />
        </div>
      }

    }
    return  Necomponent

}
export default Chenchaiah