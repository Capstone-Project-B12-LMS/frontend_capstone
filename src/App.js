import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./redux/contohSlice";

function App() {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.contoh);
  return (
    <div className="App">
      <h1 className="text-6xl mb-4 font-bold underline">Hello world!</h1>
      <p className="mb-2">Value : {value}</p>
      <button className="p-2" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button className="p-2 mx-2" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button className="p-2" onClick={() => dispatch(incrementByAmount(2))}>
        Increment By Amount
      </button>
    </div>
  );
}

export default App;
