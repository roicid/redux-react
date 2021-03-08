import React from 'react';
import {useSelector , useDispatch} from 'react-redux';
import {increment} from './actions';
import {decrement} from './actions';


function App() {
const counter = useSelector(state => state.counter);
const isLogged = useSelector(state => state.isLogged)
const dispatch = useDispatch();
  return (
    <div className="App">
    <h1> hello  {counter} </h1>
    <button onClick= { () => dispatch(increment(5)) }>+</button>
    <button onClick = {() => dispatch(decrement())}> - </button>
{isLogged ? <p> valuable information i shoudnt  see  </p> : "" }
     
    </div>
  );
}

export default App;
