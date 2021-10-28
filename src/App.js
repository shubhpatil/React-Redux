import { useSelector, useDispatch } from "react-redux";

function App() {
  const { counter } = useSelector((state) => state.counter);
  const Dispatch = useDispatch();

  return (
    <div>
      <h1>React Redux</h1>
      <h1>{counter}</h1>
      <button onClick={() => Dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => Dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
}

export default App;
