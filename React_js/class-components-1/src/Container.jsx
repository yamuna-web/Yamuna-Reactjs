import { useState } from "react";
import Inputchild from "./InputChild";
import DisplayChild from "./DisplayChild";

const Container = () => {
    const [inputtext, settext] = useState("");

    const display = () => {
        settext("bh");
    };

    const handleChange = (e) => {
        settext(e.target.value);
    };

    return (
        <div>
            <button onClick={display}>Click Me</button>
            <Inputchild inputtext={inputtext} />
            <DisplayChild handleChange={handleChange} />
        </div>
    );
};

export default Container;