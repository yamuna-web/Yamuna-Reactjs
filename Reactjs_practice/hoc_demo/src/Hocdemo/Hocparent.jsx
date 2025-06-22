import { Component } from "react";

const Hocparent = (Clickcompo) => {
    class Newcomponent extends Component {
        constructor() {
            super()
            this.state = {
                count: 0
            }
        }
        increment = () => {
            this.setState({ count: this.state.count + 1 })
        }
        decrement = () => {
            this.setState({ count: this.state.count - 1 })
        }
        reset = () => {
            this.setState({ count: 0 })
        }
        render() {
            const { increment, decrement, reset } = this
            return <div>
                <Clickcompo
                    count={count}
                    increment={increment}
                    decrement={decrement}
                    reset={reset}
                />
            </div>
        }
    }
    return Newcomponent
}
export default Hocparent