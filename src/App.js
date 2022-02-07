import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Counter from "./Counter";
import { getUser } from "./store/redux/user";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const user = useSelector((state) => state.user.user);
  console.log(user);

  // const [count, setCount] = React.useState(0); // without redux
  const count = useSelector((state) => state.counter.count);
  const voters = ["jose mejia", "ximena ocampo", "maria palitos"];

  return (
    <div className="App">
      {user && <h1>Hello, {user.firstName} </h1>}
      <h1>Redux made easy</h1>
      <h2>Total count: {count}</h2>
      {/* <Counter count={count} setCount={setCount} />  // without redux */}
      {voters.map((voter) => (
        <Counter name={voter} />
      ))}
    </div>
  );
}

export default App;
