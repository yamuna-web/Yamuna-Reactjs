import { Component } from "react";
import Hocparent from "../../../app2_hoc/src/Hoc/Hocparent";

class Clickcompo extends Component {
    render() {
        const { count, increment, decrement, reset } = this.props
        return <div>
            <h2>count:{count}</h2>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>

        </div>
    }
}
export default Hocparent(Clickcompo)
