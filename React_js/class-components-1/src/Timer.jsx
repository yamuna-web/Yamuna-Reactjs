import React, { useRef } from 'react';

function Timer() {
    const count = useRef(0);

    const handleClick = () => {
        count.current += 1;
        console.log(count.current);
    };

    return <button onClick={handleClick}>Increment</button>;
}
export default Timer
