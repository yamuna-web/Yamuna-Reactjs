import { Component } from "react";
import HandleCounter from "../Render_props/HandleCounter";
import Clickcounte from "./Clickcounter";
import Handle from "./Handle";
import Hovercounter from "./Hovercounter";

export default class Common extends Component {
    render() {
        return <div>
            <HandleCounter
                render={(count, increment, decrement, reset) => (
                    <Clickcounte
                        count={count}
                        increment={increment}
                        decrement={decrement}
                        reset={reset}

                    />
                )}

            />
            <Handle
                render={(count, increment, decrement, reset) => (
                    <Hovercounter
                        count={count}
                        increment={increment}
                        decrement={decrement}
                        reset={reset}

                    />
                )}


            />
        </div>
    }
}