import { Component } from "react";
import Child1 from "./Chld1";
import Child2 from "./Child2";
import Commmon from "./Common";

export default class Parent extends Component {

    render() {
        return <div>
            
            <Commmon render={(count, increment, decrement, reset) => (
                <Child1 count={count}
                    increment={increment}
                    decrement={decrement}
                    reset={reset} />)} />
            <Commmon render={(count, increment, decrement, reset) => (
                <Child2 count={count}
                    increment={increment}
                    decrement={decrement}
                    reset={reset} />)} />
        </div>
    }
}