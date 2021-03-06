import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './actions'
function App() {
  const counter = useSelector(state=> state.counter);
  const isLogged = useSelector(state=> state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={()=> dispatch(increment(4))}>+</button>
      <button onClick={()=> dispatch(decrement(2))}>-</button>
      {isLogged ? <h3>Valuable info shouldn't see if not logged.</h3>: ''}
    </div>
  );
}

export default App;
