import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';


function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

let store = createStore(counter);


class Counter extends React.Component {
  render() {
    return (
      <div>
        {this.props.count}
        <br/>
        <button onClick={() => {
          store.dispatch({
            type: 'INCREMENT'
          });
        }}>+</button>
          <button onClick={() => {
          store.dispatch({
            type: 'DECREMENT'
          });
        }}>-</button>
      </div>
    );
  }
}

store.subscribe(() => {
  ReactDOM.render(
    <Counter
      count={store.getState()}
    />,
    document.getElementById('counter')
  );
});

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'INCREMENT' });
// 1
store.dispatch({ type: 'INCREMENT' });
// 2
store.dispatch({ type: 'DECREMENT' });
// 1
