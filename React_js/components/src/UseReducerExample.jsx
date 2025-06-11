import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
      case 'reset':
        return {count:0}
    default:
      return state;
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h3>COUNT:{state.count}</h3>
      <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>

    </div>
  );
};

export default UseReducerExample;
