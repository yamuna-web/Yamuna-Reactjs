import { Component } from "react";
import Savithri from "./Savithri";
import Yamuna from "./Yamuna";
import Neeru from "./Neeru";


export default class Chenchaiah extends Component{
    render(){
        return <div>
            <Savithri render={(count,increment,decrement,reset)=>(
               <Yamuna 
               count={count}
               increment={increment}
               decrement={decrement}
               reset={reset}
               />
            )}/>
            <Savithri render={(count,increment,decrement,reset)=>(
                <Neeru
                count={count}
                increment={increment}
                decrement={decrement}
                reset={reset}
                />
            )}/>
        </div>
    }
}