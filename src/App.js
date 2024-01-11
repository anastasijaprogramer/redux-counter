import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './actions';

function App() {
  const counter = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.IsLoggedReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">

       <h1>Counter {counter}</h1>
       <button onClick={() => dispatch(increment(5))}>+</button>
       <button onClick={() => dispatch(decrement(1))}>-</button>
       <p>isLogged {isLogged}</p>
      </header>
    </div>
  );
}

export default App;
